🏗️ System Architecture Document (SAD) – StarqueZZ

0. Summary

StarqueZZ is a PWA that gamifies chores for kids (5–8) with a parent-approval gate, a star economy, and AI-generated color themes. The architecture prioritizes offline-first, security via RLS, and simple ops using React + Vite on the client and Supabase (Postgres, Edge Functions) + Clerk (Auth) on the backend.

⸻

1. Architecture Goals & Quality Attributes
	•	Offline-first UX: chores can be viewed/marked offline; sync on reconnect.
	•	Data integrity: server-enforced rules (core-gate, 50% bonus) via functions/DB.
	•	Security: parent auth via Clerk, child short-lived PIN token, Postgres RLS.
	•	Performance: <2s initial load on mid devices, smooth interactions.
	•	Maintainability: clean modular boundaries, typed contracts, minimal infra.
	•	Observability: basic logging/metrics, error capture and replay.

⸻

2. High-Level Architecture

Clients
	•	PWA (React + Vite): Tailwind CSS + ShadCN UI + TweakCN themes, Workbox SW, Dexie (IndexedDB), TanStack Query.

Backend (Supabase + Clerk)
	•	Auth: Clerk (parent email/password, hosted sessions/JWT). Child PIN token via Edge Function.
	•	Database: Postgres with RLS policies.
	•	Edge Functions: chore approval, star ledger updates, weekly bonus job, AI palette generation proxy, push broadcast.
	•	Storage: (optional) for avatars/theme assets (not used for IP content).

Services
	•	Web Push: VAPID keys; push via Edge Function.
	•	LLM/AI Palette: server-side call (guardrails) that returns only color palettes + labels.

Hosting/CI
	•	Frontend: Vercel/Netlify.
	•	Supabase: Managed.
	•	Clerk: Managed.
	•	CI: GitHub Actions (lint/test/build/deploy).

[React PWA]
  ├─ Service Worker (Workbox)
  ├─ IndexedDB (Dexie)
  ├─ UI Layer (ShadCN + TweakCN themes)
  └─ HTTP/WS → [Clerk Auth] + [Supabase: Postgres (RLS), Edge Functions] → [Push, AI Palette]


⸻

3. Component Responsibilities

3.1 PWA (Frontend)
	•	UI Shell: child mode (PIN), parent mode (email session), theme tokens.
	•	Data layer: TanStack Query (cache, retries), background sync hooks.
	•	Offline queue: Dexie tables for actions (mark done, redeem) with replay.
	•	Theming: apply CSS token set per child; contrast guard; TweakCN theme integration.
	•	Push: register service worker, store subscription, handle notifications.
	•	UI Components: ShadCN base components with TweakCN Neo-Brutalism theme.

3.2 Supabase Edge Functions
	•	childLogin: verify child PIN → short-lived JWT with role=child claim.
	•	approveCompletions: parent approves pending → apply core gate, extra rules, create star transactions.
	•	weeklyBonus (cron): compute perfect week + apply +50%.
	•	generatePalette: take prompt ("favorite character") → return safe palette tokens.
	•	pushBroadcast: send reminders (chores due, streak status).

3.3 Database (Postgres)
	•	RLS: scope to parent or child claims.
	•	Constraints: guard business rules (enum checks, unique-per-day, FK).
	•	Views: convenience views for dashboards (weekly rollups).

⸻

4. Data Model (ERD Sketch)

Tables
	•	parent(user_id PK, email UNIQUE, created_at)
	•	child(id PK, parent_id FK→parent.user_id, name, pin_hash, theme_id FK, created_at)
	•	theme_palette(id PK, child_id FK, name, tokens JSONB, contrast_ok BOOL, created_at)
	•	chore(id PK, parent_id FK, title, is_core BOOL, active BOOL)
	•	chore_assignment(id PK, child_id FK, chore_id FK, schedule JSONB, created_at)
	•	chore_completion(id PK, child_id FK, chore_id FK, date DATE, status TEXT CHECK (status IN ('pending','approved','rejected')), marked_by_child_at TIMESTAMP, approved_by_parent_at TIMESTAMP)
	•	star_transaction(id PK, child_id FK, delta INT, reason TEXT CHECK (reason IN ('core_day','extra','weekly_bonus','redeem')), metadata JSONB, created_at)
	•	reward(id PK, parent_id FK, title, cost_stars INT, active BOOL)
	•	reward_redemption(id PK, child_id FK, reward_id FK, cost_stars INT, status TEXT CHECK (status IN ('pending','fulfilled')), created_at, fulfilled_at)
	•	push_sub(id PK, owner_type TEXT CHECK (owner_type IN ('parent','child')), owner_id UUID, endpoint TEXT, p256dh TEXT, auth TEXT, created_at)

Key Rules Encoded
	•	Unique (child_id, chore_id, date) in chore_completion.
	•	Weekly bonus job scans chore_completion for 7-day core completion streaks.
	•	Ledger (star_transaction) is append-only.

⸻

5. API Surface (selected)

Auth
	•	POST /auth/parent/signin → Clerk
	•	POST /auth/child/login → returns short-lived child JWT

Chores
	•	GET /child/:id/chores?date=YYYY-MM-DD
	•	POST /child/:id/chores/:choreId/markDone (child JWT) → create chore_completion (pending)
	•	POST /parent/approvals (parent JWT) → approve list of completions; function applies stars

Stars & Rewards
	•	GET /child/:id/stars/balance
	•	GET /rewards (parent)
	•	POST /redeem (child → pending, parent fulfills)

Themes
	•	POST /theme/generate {prompt} → {tokens}
	•	POST /child/:id/theme/apply {theme_id}

Push
	•	POST /push/subscribe → save subscription
	•	POST /push/remind (system/cron) → broadcast reminders

⸻

6. Sequence Flows (text diagrams)

6.1 Child Marks Chore → Parent Approval → Stars
	1.	Child (offline/online) taps Mark Done → enqueue completion locally.
	2.	SW/Sync → POST to markDone → creates chore_completion(status=pending).
	3.	Parent dashboard shows pending items.
	4.	Parent selects items → approveCompletions function:
	•	Validate child's two core chores completed today → +1 star (once daily).
	•	If core gate passed, each extra completion today → +1 star.
	•	Create star_transaction rows accordingly.
	•	Update completion status to approved.

6.2 Weekly Bonus
	1.	Cron triggers weeklyBonus.
	2.	For each child: scan last 7 days → if core completed all 7 days, compute 50% of that week's earned stars.
	3.	Insert star_transaction(reason='weekly_bonus', delta=round(week_total*0.5)).

6.3 Theme Generation
	1.	Child/Parent enters favorite character.
	2.	generatePalette calls LLM with guardrails → returns palette tokens only.
	3.	Client applies tokens to CSS variables; store in theme_palette.
	4.	TweakCN theme integration: override base theme with AI-generated colors.

⸻

7. Offline & Sync Strategy
	•	Caching: App shell + chore lists cached via Workbox.
	•	Queues: Dexie action tables (completionQueue, redeemQueue).
	•	Background Sync: flush queues when online; retries with backoff.
	•	Conflict Handling: server is source of truth; client reconciles statuses.
	•	Optimistic UI: show "Pending approval" badge immediately.

⸻

8. Security & Privacy
	•	Auth: Parent via Clerk (email/password). Child JWT via PIN; short TTL.
	•	RLS: All tables enforce parent/child scoping.
	•	Secrets: Edge Functions keep VAPID keys and AI API keys.
	•	Rate Limits: PIN attempts, markDone frequency, function invocations.
	•	PII: Minimal collection; no PII in push payloads.

⸻

9. Non-Functional Requirements
	•	Performance: TTI < 2s on mid phones; bundle splitting; image lazy-load.
	•	Reliability: At-least-once delivery for queued actions; idempotent functions.
	•	Accessibility: WCAG AA; theme contrast validator; large tap targets.
	•	Compatibility: iOS/Android/Chrome/Edge/Safari as installed PWAs.
	•	Scalability: Start with Supabase + Clerk; can migrate to Node/Nest + RDS later.

⸻

10. Deployment & Environments
	•	Envs: Dev, Staging, Prod (separate Supabase projects/DBs and Clerk instances).
	•	CI/CD: PR previews; migrations via supabase/migrations.
	•	Config: Env vars for Clerk, Supabase, VAPID, LLM provider.

⸻

11. Observability
	•	Frontend: Sentry (errors), Web Vitals, simple logs.
	•	Backend: Edge Function logs and Supabase logs; Auth via Clerk logs; audit tables.
	•	Dashboards: Weekly earned/bonus/redemptions; approval latency.

⸻

12. Risks & Mitigations
	•	Push on iOS: requires installed PWA → show onboarding to install; fallback to email for parents.
	•	LLM variability: guardrails & schema validation for palette; fallback to deterministic mapping.
	•	Offline conflicts: idempotent server functions; client reconciliation.
	•	IP concerns: palettes only; no logos/characters.

⸻

13. Future Extensions
	•	Move to Node/Nest with Redis jobs when scale needs grow.
	•	Realtime subscriptions for instant dashboards.
	•	Analytics-based dynamic rewards to reduce drop-off.

⸻

14. Open Decisions
	•	LLM provider for palette generation (OpenAI/Anthropic/local rules-only?).
	•	Exact schedule format (iCal-like vs simple day-of-week booleans).
	•	Notification policy (quiet hours, frequency caps).

⸻

15. UI/UX Architecture

15.1 Design System
	•	Base Framework: Tailwind CSS for utility-first styling
	•	Component Library: ShadCN UI for consistent, accessible components
	•	Theme System: TweakCN Neo-Brutalism as base theme with AI-generated overrides
	•	Responsive Design: Mobile-first approach with PWA optimization

15.2 Theme Integration
	•	Base Theme: TweakCN Neo-Brutalism provides consistent design foundation
	•	AI Overrides: Child-specific color palettes override base theme variables
	•	Contrast Validation: Ensure accessibility compliance with WCAG AA standards
	•	Theme Persistence: Store theme preferences in database and localStorage

15.3 Component Architecture
	•	ShadCN Base Components: Button, Card, Dialog, Form, etc.
	•	Custom Components: ChoreCard, StarDisplay, RewardItem, ThemeSelector
	•	Theme-aware Components: Automatically adapt to child's selected theme
	•	Accessibility: Large tap targets, high contrast, screen reader support

⸻

This SAD defines the MVP technical blueprint for StarqueZZ.