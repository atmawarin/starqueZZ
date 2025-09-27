## Architecture

### Overview
StarqueZZ is a PWA built with React + Vite and Tailwind. Authentication is provided by Clerk (replacing Supabase auth). The app supports offline usage via IndexedDB (Dexie) and a Service Worker. Frontend deploys to Vercel/Netlify; Clerk is configured via its dashboard and environment keys.

### Stack Summary
- UI: React components (client-first); Tailwind CSS
- Auth: Clerk hosted UI or embedded components; sessions and MFA
- Data: Mock JSON during prototyping; persistent backend to be defined later
- Offline: IndexedDB (Dexie) + Service Worker caching
- Config: `.env` for Clerk keys and app settings

### Authentication with Clerk
- Use `<ClerkProvider>` at the app root.
- Use Clerk components: `<SignIn />`, `<SignUp />`, `<UserButton />` and hooks like `useUser()`.
- Sessions handled by Clerk; tokens available for future server calls.
- Configure allowed sign-in methods (email, OAuth, MFA) in Clerk dashboard.

### Middleware Protection
- Replace deprecated `authMiddleware` with `clerkMiddleware`.
- Protect sensitive routes (e.g., parent dashboard). Public routes: marketing, sign-in, sign-up, and any unauthenticated kid-view prototypes.

### Roles and Authorization
- Roles: `parent`, `child`.
- Parent can create/edit tasks, configure rewards, assign themes.
- Child can view assigned tasks, mark completion, and view stars.
- Store role in Clerk user metadata and check on guarded routes/components.

### Data and Offline Flow (Prototype)
- Source of truth: mock JSON while in prototype.
- State changes persisted to IndexedDB for offline continuity.
- Future server API will verify Clerk JWTs on requests.

### Environment Variables
- `VITE_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY` (for future server usage)

### Deployment
- Frontend: Vercel/Netlify build for Vite PWA.
- Clerk: set allowed origins, redirect URLs, and environment variables in host and local `.env`.

### Migration Notes (Supabase → Clerk)
- Remove Supabase auth client and references.
- Introduce `ClerkProvider` and Clerk components.
- Replace any route `authMiddleware` with `clerkMiddleware`.
- Plan future backend with Clerk JWT verification; Supabase-specific backend references are out of scope for now.