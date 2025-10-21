# 📑 Product Requirement Document (PRD) – StarqueZZ

## 1. Overview

**StarqueZZ** is a **Progressive Web App (PWA)** designed to gamify chore tracking and rewards for children aged 5–15, originally designed for Zen and Zia. The app turns daily responsibilities into fun quests with stars as the reward currency. Parents define chores and physical rewards, while children engage with a playful, themeable interface.

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

* Log in with PIN. Only apply if there are more than 2 kids in one account.
* View assigned chores (core + extra).
* Mark chores as complete (pending parent approval).
* Redeem stars in **Star Store**.
* Enjoy themeable UI adapted to favorite characters/colors.
* Access a **basic tutorial** on first-time onboarding.

---

## 4. Core Features (MVP)

### Authentication & Accounts

* Parent login via **email/password**.
* Child login via **PIN-based access** (only required when there are 2+ children).
* If there is only one child, the homepage immediately goes to the child's homepage without PIN.
* If there are multiple children, default login page shows kid profile selection, then prompts for PIN after profile selection.
* One parent manages multiple children.


### Chore & Star System

* **Core Tasks**: 2 per day. Must complete both to earn 1 star.
* **Extra Tasks**: Eligible only if core tasks completed. Each extra task = 1 star.
* **Weekly Bonus**: Completing all core tasks for 7 days straight → 50% star bonus.
* Parents must approve all chores before stars are awarded.

### Rewards & Star Store

* Parent defines a list of physical rewards. There would be default predefined list that great for kids. 
* Children can browse **Star Store** to redeem earned stars.
* Star balance tracked per child.

### Parent Dashboard

* Manage chores, rewards, and approvals.
* View weekly progress reports per child.
* View weekly progress reports per child.


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

### 5.2 UI Design Principles

* **Emoji Usage**: Be sparse with emoji usage. Only use emojis when explicitly specified by user requirements or when they serve a clear functional purpose (e.g., visual indicators for quest types, star displays).
* **Primary Actions**: Each page should have only one main Call-to-Action (CTA) to avoid decision paralysis and maintain clear user flow.
* **Visual Hierarchy**: Design should guide users naturally to the primary action without competing elements.
* **Mobile-First**: All interfaces optimized for mobile viewport with touch-friendly interactions.

#### Information Hierarchy Rules

* **Primary Content First**: Actionable content (quests, tasks, items to interact with) should be the most prominent visual element on any page.
* **Progress as Context**: Progress indicators, statistics, and streak information are secondary/supportive information. They should be visible but subtle—do not use heavy card styling, bright accent colors, or large containers that compete with primary content.
* **Recommended styling for progress**: Use slim bars, inline text, or minimal badges rather than prominent cards. Avoid `shadow-bubble-lg`, heavy borders, or accent background colors for progress indicators.
* **Focus on Action**: Users should immediately see what they need to do, not how they're performing. Performance metrics are supporting information only.

#### Navigation Rules

* **Single Source of Truth**: Navigation actions (e.g., "Go to Store", "View Progress") should only appear in one location per interface, typically the bottom navigation bar for child interface.
* **No Redundant Navigation**: Do not duplicate navigation buttons in page content when they already exist in the navigation bar.
* **Content Area Focus**: The main content area should focus on the page's primary purpose, not navigation to other pages.
* **Exception**: Deep linking within related content (e.g., "View this specific quest detail") is acceptable as it's contextual navigation, not global navigation.

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
* **Theme System**: AI-generated color palettes based on favorite characters/movies, theme locker where children can switch among parent-approved palettes, child-facing prompt flow for new theme requests.

---

✅ This PRD defines the MVP scope for **StarqueZZ**, ensuring clarity for design and development teams.
