# 📑 Product Requirement Document (PRD) – StarqueZZ

## 1. Overview

**StarqueZZ** is a **Progressive Web App (PWA)** designed to gamify chore tracking and rewards for children aged 5–8, specifically Zen and Zia. The app turns daily responsibilities into fun quests with stars as the reward currency. Parents define chores and physical rewards, while children engage with a playful, themeable interface.

---

## 2. Goals & Non-Goals

### Goals

* Encourage responsibility and habit formation in children.
* Provide parents with oversight and tools to manage chores and rewards.
* Deliver an engaging child experience via gamification, themes, and stars.
* Ensure accessibility via **PWA** (cross-device, install-free, offline support).

### Non-Goals

* No financial transactions or real-money purchases in MVP.
* No social/family networking features in MVP.
* No licensed/branded characters; theming is AI-generated palettes only.

---

## 3. User Roles

### Parent

* Create/manage multiple child accounts.
* Add and configure chores (core + extra).
* Review and approve completed tasks (mandatory for all tasks).
* Define physical rewards in a **Star Store**.
* Track weekly progress and streaks.
* Manage theme selection for children.

### Child

* Log in with PIN.
* View assigned chores (core + extra).
* Mark chores as complete (pending parent approval).
* Redeem stars in **Star Store**.
* Enjoy themeable UI adapted to favorite characters/colors.
* Access a **basic tutorial** on first-time onboarding.

---

## 4. Core Features (MVP)

### Authentication & Accounts

* Parent login via **Clerk** (email/password).
* Child login via **PIN-based access**.
* One parent manages multiple children.

### Chore & Star System

* **Core Tasks**: 2 per day. Must complete both to earn 1 star.
* **Extra Tasks**: Eligible only if core tasks completed. Each extra task = 1 star.
* **Weekly Bonus**: Completing all core tasks for 7 days straight → 50% star bonus.
* Parents must approve all chores before stars are awarded.

### Rewards & Star Store

* Parent defines a list of physical rewards.
* Children can browse **Star Store** to redeem earned stars.
* Star balance tracked per child.

### Parent Dashboard

* Manage chores, rewards, and approvals.
* View weekly progress reports per child.
* Manage themes (assign or regenerate AI themes).

### Theme System

* AI prompts children: *“Who’s your favorite character?”*.
* Generates a matching **color palette + playful labels** (e.g., SpongeBob → yellow palette).
* No official IP assets; colors and names only.
* **No manual fine-tuning** after AI generation.

### Notifications

* Push notifications for reminders (chores pending, reward unlocked, streak updates).

### Offline Support

* Tasks and progress stored offline.
* Syncs automatically when online.

### Onboarding

* Basic **child-friendly tutorial** introduces app usage on first login.

---

## 5. Non-Functional Requirements

* **Performance**: Fast load times (<2s), smooth animations.
* **Reliability**: Offline-first architecture with background sync.
* **Security**: Parent auth managed by **Clerk**; data secured via encryption; child access limited to PIN.
* **Accessibility**: High-contrast palettes, readable fonts, WCAG AA compliance.
* **Compatibility**: Cross-browser and mobile-first responsive design.

---

## 6. Acceptance Criteria

* ✅ Parent can create an account with email/password (via Clerk).
* ✅ Parent can create multiple child profiles.
* ✅ Child can log in with PIN and see chores.
* ✅ Parent can assign 2 daily core tasks and extra tasks.
* ✅ Child only earns stars if both core tasks are complete.
* ✅ Weekly bonus correctly applies at 50% if streak achieved.
* ✅ Parent must review and approve all completed chores.
* ✅ Star Store displays rewards and redemption works.
* ✅ AI-generated theme applies correct color scheme to UI without manual adjustments.
* ✅ App works offline and syncs when back online.
* ✅ Push notifications remind kids of chores and streaks.
* ✅ Basic child tutorial appears on first onboarding.

---

## 7. Open Questions

* None at this stage; clarified decisions:

  * Parent approvals are **mandatory for all tasks**.
  * AI theme suggestions do **not allow manual fine-tuning**.
  * A **basic child tutorial** will be included in MVP.

---

## 8. Future Considerations (Post-MVP)

* Leveling system for avatars.
* Adventure maps and virtual pets.
* Achievement badges.
* Mini-games as star unlockables.
* Social features (family leaderboards).

---

✅ This PRD defines the MVP scope for **StarqueZZ**, ensuring clarity for design and development teams.
