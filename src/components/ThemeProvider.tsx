import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemePalette, ThemeTokens } from '../types'

interface ThemeContextType {
  currentTheme: ThemePalette | null
  setTheme: (theme: ThemePalette) => void
  generateTheme: (prompt: string, childId: string) => Promise<ThemePalette>
  applyThemeTokens: (tokens: ThemeTokens) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemePalette | null>(null)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('starquezz-theme')
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme)
        setCurrentTheme(theme)
        applyThemeTokens(theme.tokens)
      } catch (error) {
        console.error('Failed to load saved theme:', error)
      }
    }
  }, [])

  const setTheme = (theme: ThemePalette) => {
    setCurrentTheme(theme)
    localStorage.setItem('starquezz-theme', JSON.stringify(theme))
    applyThemeTokens(theme.tokens)
  }

  const applyThemeTokens = (tokens: ThemeTokens) => {
    const root = document.documentElement
    
    // Apply CSS custom properties
    root.style.setProperty('--color-primary', tokens.primary)
    root.style.setProperty('--color-secondary', tokens.secondary)
    root.style.setProperty('--color-accent', tokens.accent)
    root.style.setProperty('--color-background', tokens.background)
    root.style.setProperty('--color-foreground', tokens.foreground)
    root.style.setProperty('--color-muted', tokens.muted)
    root.style.setProperty('--color-muted-foreground', tokens.mutedForeground)
    root.style.setProperty('--color-border', tokens.border)
    root.style.setProperty('--color-input', tokens.input)
    root.style.setProperty('--color-ring', tokens.ring)
  }

  const generateTheme = async (prompt: string, childId: string): Promise<ThemePalette> => {
    // Mock AI theme generation - in real app, this would call an API
    const mockThemes: Record<string, ThemeTokens> = {
      'spongebob': {
        primary: '#FFD700', // Gold
        secondary: '#00BFFF', // Deep Sky Blue
        accent: '#FF6B6B', // Coral
        background: '#FFF8DC', // Cornsilk
        foreground: '#2F4F4F', // Dark Slate Gray
        muted: '#F0F8FF', // Alice Blue
        mutedForeground: '#708090', // Slate Gray
        border: '#DDA0DD', // Plum
        input: '#E6E6FA', // Lavender
        ring: '#FFD700' // Gold
      },
      'mario': {
        primary: '#FF0000', // Red
        secondary: '#0000FF', // Blue
        accent: '#FFD700', // Gold
        background: '#FFFFFF', // White
        foreground: '#000000', // Black
        muted: '#F5F5F5', // White Smoke
        mutedForeground: '#666666', // Dark Gray
        border: '#CCCCCC', // Light Gray
        input: '#F0F0F0', // Light Gray
        ring: '#FF0000' // Red
      },
      'frozen': {
        primary: '#87CEEB', // Sky Blue
        secondary: '#FFB6C1', // Light Pink
        accent: '#DDA0DD', // Plum
        background: '#F0F8FF', // Alice Blue
        foreground: '#2F4F4F', // Dark Slate Gray
        muted: '#E6F3FF', // Light Blue
        mutedForeground: '#708090', // Slate Gray
        border: '#B0E0E6', // Powder Blue
        input: '#E0F6FF', // Light Cyan
        ring: '#87CEEB' // Sky Blue
      }
    }

    // Simple keyword matching for demo
    const lowerPrompt = prompt.toLowerCase()
    let selectedTheme = 'spongebob' // default
    
    if (lowerPrompt.includes('mario') || lowerPrompt.includes('red') || lowerPrompt.includes('blue')) {
      selectedTheme = 'mario'
    } else if (lowerPrompt.includes('frozen') || lowerPrompt.includes('ice') || lowerPrompt.includes('snow')) {
      selectedTheme = 'frozen'
    }

    const newTheme: ThemePalette = {
      id: `theme-${Date.now()}`,
      childId,
      name: prompt,
      tokens: mockThemes[selectedTheme],
      contrastOk: true,
      createdAt: new Date()
    }

    return newTheme
  }

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    generateTheme,
    applyThemeTokens
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
