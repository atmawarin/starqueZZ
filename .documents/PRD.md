# Product Requirements Document (PRD)

## Product: StarqueZZ

### Summary
StarqueZZ is a PWA that gamifies chores for kids aged 5–8. We are replacing Supabase auth with Clerk to simplify authentication, improve reliability, and unlock hosted UI flows and MFA. Backend data remains mocked during prototyping; future persistence will be added later.

### Goals
- Encourage consistent chore completion via stars and rewards
- Provide parents with tools to manage tasks, rewards, and themes
- Deliver a secure, simple sign-in/sign-up using Clerk

### Assumptions
- Prototype phase uses mock JSON + IndexedDB; no server-side persistence yet
- Children may use shared devices; parents manage accounts
- Offline-first behavior is necessary for family usage patterns

### Users & Roles
- Parent: manages tasks, rewards, themes; oversees progress
- Child: completes tasks, earns stars, views progress
- Roles stored in Clerk user metadata

### Key Features (MVP)
1) Authentication (Clerk)
- Hosted or embedded sign-in/sign-up
- Session management and user profile via Clerk
- Basic role metadata (parent/child) captured on first run or via parent settings

2) Task System
- Two daily core tasks must be completed; additional tasks count only afterwards
- Earn 1 star per day for core completion; 50% weekly bonus for perfect streaks

3) Parent Dashboard
- Create/edit tasks and rewards
- Assign themes per child
- Review weekly progress

4) Offline Support
- Persist local state in IndexedDB (Dexie)
- Service Worker asset caching

### Non-Goals (MVP)
- Server-side data persistence
- Social features or public leaderboards
- Payments

### Success Metrics
- Daily task completion per child
- % of parents active weekly in dashboard
- 30/60/90-day retention
- PWA performance and offline reliability

### UX Requirements
- Simple, large touch targets for kids
- Clear visual feedback on completion (stars, animations)
- Parent flows protected; sign-in gate via Clerk
- Use shadcn and Tailwind for consistent design

### Technical Requirements
- Wrap app with `<ClerkProvider>`
- Replace any `authMiddleware` with `clerkMiddleware` for protected routes
- Store `VITE_CLERK_PUBLISHABLE_KEY` in `.env` and host; reserve `CLERK_SECRET_KEY` for future server use
- Keep user role metadata in Clerk; check on protected views/components

### Risks & Mitigations
- Role misconfiguration: add validation and default role assignments
- Offline conflicts: design clear local precedence; plan for future sync
- Child privacy: minimize PII; rely on Clerk for auth security

### Open Questions
- What backend will we adopt post-prototype for persistence?
- Will children authenticate directly, or use device-level auth with parent presence?
- How to verify chore completion integrity beyond UI controls?

### Rollout Plan
- Phase 1: Integrate Clerk auth and protect parent views
- Phase 2: Solidify role metadata and onboarding flows
- Phase 3: Add server persistence and secure APIs using Clerk JWTs