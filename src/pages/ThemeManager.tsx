import React, { useState } from 'react'
import { Sparkles, Palette, Wand2 } from 'lucide-react'
import { useTheme } from '../components/ThemeProvider'

// Mock themes
const mockThemes = [
  { id: '1', name: 'SpongeBob', colors: ['#FFD700', '#00BFFF', '#FF6B6B'] },
  { id: '2', name: 'Mario', colors: ['#FF0000', '#0000FF', '#FFD700'] },
  { id: '3', name: 'Frozen', colors: ['#87CEEB', '#FFB6C1', '#DDA0DD'] }
]

export function ThemeManager() {
  const { generateTheme, setTheme } = useTheme()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateTheme = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    try {
      const newTheme = await generateTheme(prompt, 'child-1')
      setTheme(newTheme)
    } catch (error) {
      console.error('Failed to generate theme:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Theme Manager</h1>
        <p className="text-muted-foreground">Create personalized themes for your children</p>
      </div>

      {/* Theme Generation */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Generate New Theme</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              What's your child's favorite character or theme?
            </label>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., SpongeBob, Mario, Frozen, Princess, Superhero..."
              className="input w-full"
            />
          </div>
          
          <button
            onClick={handleGenerateTheme}
            disabled={!prompt.trim() || isGenerating}
            className="btn-primary child-tap flex items-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4" />
                <span>Generate Theme</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Available Themes */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Available Themes</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {mockThemes.map((theme) => (
            <div key={theme.id} className="card p-4 hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="font-medium text-foreground">{theme.name}</h3>
              </div>
              
              <div className="flex space-x-1 mb-3">
                {theme.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              <button className="btn-secondary w-full child-tap flex items-center justify-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>Apply Theme</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
