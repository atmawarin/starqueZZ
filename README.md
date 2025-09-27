# 🌟 StarqueZZ

**StarqueZZ** is a **Progressive Web App (PWA)** that gamifies chore tracking and rewards for children aged 5–8, specifically designed for Zen and Zia. The app transforms daily responsibilities into engaging quests where children earn stars for completing chores and can redeem them for real-world rewards set by parents.

## 🎯 Project Overview

StarqueZZ balances **child engagement** (fun, progress, rewards) with **parent control** (task management, oversight, custom rewards), while being accessible across devices without requiring app store downloads.

## 🎮 Core Features (MVP)

### For Kids
- **Core Task System**: Must complete 2 daily core tasks → 1 star. Additional tasks only count if core tasks are complete
- **Stars & Rewards**: Stars earned daily, with a **50% weekly bonus** for perfect streaks
- **Personal Profiles**: Each child has their own login, avatar, and progress tracking
- **Visual Feedback**: Star animations, sounds, and celebratory effects for completed tasks
- **Themeable UI**: Color schemes and UI accents adapt to selected themes (e.g., "SpongeBob" → predominantly yellow with playful labels)

### For Parents
- **Parent Dashboard**: Task builder, reward manager, weekly progress dashboard
- **Theme Manager**: Select, preview, and assign themes per child profile
- **Oversight Controls**: Prevent false completion, ensure fairness

## 🛠️ Technical Stack

- **Frontend**: React + Vite PWA with Tailwind CSS
- **Auth**: Clerk (user management, sessions, MFA)
- **Offline Support**: IndexedDB with Dexie, Service Worker
- **Deployment**: Vercel/Netlify for frontend; Clerk dashboard for auth

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS)
- npm, yarn, or pnpm

### Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── stores/        # State management
├── types/         # TypeScript definitions
├── utils/         # Helper functions
└── themes/        # Theme system
```

## 🎨 Features Implemented

- ✅ **React + Vite + TypeScript** setup
- ✅ **Tailwind CSS** with custom theme variables
- ✅ **PWA Configuration** with service worker
- ✅ **Child/Parent Navigation** with React Router
- ✅ **Theme System** with AI-generated palette support
- ✅ **Mock Data** for prototyping
- ✅ **Responsive Design** with child-friendly UI
- ✅ **Component Architecture** with reusable components

## 🎯 Development Status

**Current Phase**: Frontend Prototyping
- Building UI components with mock data
- Implementing navigation between child/parent views
- Setting up theme system foundation
- Preparing for backend integration

## 📊 Success Metrics

- **Child Engagement**: Average daily task completion rate per child
- **Parental Adoption**: Percentage of parents actively setting tasks & rewards weekly
- **Retention**: Weekly active users after 30/60/90 days
- **Behavioral Impact**: Improvement in consistency of daily responsibilities
- **Technical Performance**: PWA responsiveness, offline support, and ease of installation

## 🎯 Strategic Positioning

StarqueZZ differentiates by:
- Delivering as a **PWA** for maximum accessibility and ease of adoption
- Combining **strict responsibility rules** with **fun gamification**
- Offering a **parent-first dashboard** as a critical MVP feature
- Designing specifically for **children 5–8** with simple mechanics and playful UI

---

*Turning everyday chores into epic quests where kids collect stars, unlock prizes, and shine like heroes at home.* ✨