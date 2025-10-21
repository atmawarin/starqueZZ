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

* Parent login via **email/password**.
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
* Manage themes (review AI-generated palettes, nickname them, assign per child).

### Theme System

* AI prompts children: *“Who’s your favorite character?”* (captured during setup or later by parent request).
* Generates a matching **color palette + playful labels** (e.g., SpongeBob → yellow palette).
* Palettes are stored in a per-child library for parents to approve, nickname, and assign.
* **MVP guardrail**: Children do not switch or request new themes independently; parents manage selection.
* No official IP assets; colors and names only.
* **No manual fine-tuning** after AI generation.
* **Roadmap**: enable child browsing of the approved library, then child prompt submissions routed via parent approval before generation.

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
* **Security**: Parent data secured via encryption; child access limited to PIN.
* **Accessibility**: High-contrast palettes, readable fonts, WCAG AA compliance.
* **Compatibility**: Cross-browser and mobile-first responsive design.

---

## 5.1 Language & Tone Guidelines

### Child Interface Tone: Funny Adventure 🎭

**Core Characteristics:**
- Silly and humorous language that makes children laugh
- Uses funny words, made-up terms, and playful wordplay
- Emphasizes having fun while completing tasks
- Encourages laughter and joy in the quest experience

**Key Phrases & Examples:**
- "Time for your daily dose of quest-astic fun!"
- "You're a quest-master extraordinaire! Have a star! ⭐"
- "The Star Store is calling your name... or maybe it's just hungry!"
- "Quest complete! You're officially a star-collecting superstar!"
- "Ready to quest-ify your day? Let's go on an adventure!"
- "You sly little quest-master! You've outsmarted another task!"
- "Psst... want to sneak in an extra quest and earn bonus stars?"
- "Shh... don't tell anyone, but you're doing amazing!"

**Tone Principles:**
- Make chores feel like silly adventures rather than work
- Use humor to reduce task anxiety and increase engagement
- Celebrate achievements with playful, exaggerated language
- Create a sense of fun and excitement around responsibility
- Use "we" language to make it feel collaborative and supportive

**Parent Interface Tone:**
- Professional but warm and encouraging
- Clear, direct language for management tasks
- Supportive messaging that reinforces the child's progress
- Maintains the fun spirit while providing necessary oversight

---

## 6. Acceptance Criteria

* ✅ Parent can create an account with email/password.
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
* Theme locker where children can switch among parent-approved palettes.
* Child-facing prompt flow that routes new theme requests to parents for approval before AI generation.

---

✅ This PRD defines the MVP scope for **StarqueZZ**, ensuring clarity for design and development teams.
