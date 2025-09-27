// User Types
export interface Parent {
  id: string
  email: string
  name: string
  createdAt: Date
}

export interface Child {
  id: string
  parentId: string
  name: string
  pin: string
  avatar?: string
  themeId?: string
  createdAt: Date
}

// Chore Types
export interface Chore {
  id: string
  parentId: string
  title: string
  description?: string
  isCore: boolean
  active: boolean
  createdAt: Date
}

export interface ChoreAssignment {
  id: string
  childId: string
  choreId: string
  schedule: Schedule
  createdAt: Date
}

export interface Schedule {
  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean
}

export interface ChoreCompletion {
  id: string
  childId: string
  choreId: string
  date: string // YYYY-MM-DD format
  status: 'pending' | 'approved' | 'rejected'
  markedByChildAt?: Date
  approvedByParentAt?: Date
}

// Star System Types
export interface StarTransaction {
  id: string
  childId: string
  delta: number
  reason: 'core_day' | 'extra' | 'weekly_bonus' | 'redeem'
  metadata?: Record<string, any>
  createdAt: Date
}

export interface StarBalance {
  childId: string
  totalStars: number
  availableStars: number
  pendingStars: number
}

// Reward Types
export interface Reward {
  id: string
  parentId: string
  title: string
  description?: string
  costStars: number
  active: boolean
  createdAt: Date
}

export interface RewardRedemption {
  id: string
  childId: string
  rewardId: string
  costStars: number
  status: 'pending' | 'fulfilled'
  createdAt: Date
  fulfilledAt?: Date
}

// Theme Types
export interface ThemePalette {
  id: string
  childId: string
  name: string
  tokens: ThemeTokens
  contrastOk: boolean
  createdAt: Date
}

export interface ThemeTokens {
  primary: string
  secondary: string
  accent: string
  background: string
  foreground: string
  muted: string
  mutedForeground: string
  border: string
  input: string
  ring: string
}

// Navigation Types
export type UserRole = 'child' | 'parent' | 'guest'

export interface AppState {
  userRole: UserRole
  currentUser?: Parent | Child
  selectedChild?: Child
  theme?: ThemePalette
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface ChildLoginForm {
  pin: string
}

export interface ChoreForm {
  title: string
  description?: string
  isCore: boolean
}

export interface RewardForm {
  title: string
  description?: string
  costStars: number
}

export interface ThemeGenerationForm {
  prompt: string
  childId: string
}

// Dashboard Types
export interface WeeklyProgress {
  childId: string
  weekStart: string
  weekEnd: string
  coreTasksCompleted: number
  extraTasksCompleted: number
  totalStars: number
  weeklyBonus: number
  streak: number
}

export interface ChildProgress {
  childId: string
  name: string
  currentStreak: number
  totalStars: number
  weeklyProgress: WeeklyProgress
  pendingApprovals: number
}