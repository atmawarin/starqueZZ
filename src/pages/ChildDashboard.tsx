import React from 'react'
import { Star, CheckCircle, Clock, Sparkles } from 'lucide-react'

// Mock data for prototyping
const mockChores = [
  {
    id: '1',
    title: 'Make your bed',
    isCore: true,
    completed: false,
    description: 'Make your bed neatly with sheets and blankets'
  },
  {
    id: '2',
    title: 'Brush your teeth',
    isCore: true,
    completed: true,
    description: 'Brush your teeth for 2 minutes'
  },
  {
    id: '3',
    title: 'Put away toys',
    isCore: false,
    completed: false,
    description: 'Put all toys back in their proper places'
  },
  {
    id: '4',
    title: 'Help set the table',
    isCore: false,
    completed: false,
    description: 'Help set plates, cups, and utensils for dinner'
  }
]

const mockStats = {
  totalStars: 15,
  todayStars: 0,
  streak: 3,
  weeklyBonus: 5
}

export function ChildDashboard() {
  const coreChores = mockChores.filter(chore => chore.isCore)
  const extraChores = mockChores.filter(chore => !chore.isCore)
  const completedCore = coreChores.filter(chore => chore.completed).length
  const canEarnExtra = completedCore === coreChores.length

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, Zen! 🌟
        </h1>
        <p className="text-muted-foreground">
          Ready to complete your daily quests and earn stars?
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <Star className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.totalStars}</div>
          <div className="text-sm text-muted-foreground">Total Stars</div>
        </div>
        
        <div className="card p-4 text-center">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.todayStars}</div>
          <div className="text-sm text-muted-foreground">Today's Stars</div>
        </div>
        
        <div className="card p-4 text-center">
          <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.streak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </div>
        
        <div className="card p-4 text-center">
          <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.weeklyBonus}</div>
          <div className="text-sm text-muted-foreground">Weekly Bonus</div>
        </div>
      </div>

      {/* Core Tasks Section */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            Core Tasks (Required)
          </h2>
          <div className="text-sm text-muted-foreground">
            {completedCore}/{coreChores.length} completed
          </div>
        </div>
        
        <div className="space-y-3">
          {coreChores.map((chore) => (
            <div 
              key={chore.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                chore.completed 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <button className="child-tap">
                  {chore.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <div className="h-6 w-6 border-2 border-muted-foreground rounded-full" />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{chore.title}</h3>
                  <p className="text-sm text-muted-foreground">{chore.description}</p>
                </div>
                {chore.completed && (
                  <Star className="h-5 w-5 text-accent" />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {completedCore === coreChores.length && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800 font-medium">
              🎉 Great job! You've completed all core tasks. You can now earn extra stars!
            </p>
          </div>
        )}
      </div>

      {/* Extra Tasks Section */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            Extra Tasks
          </h2>
          <div className="text-sm text-muted-foreground">
            {!canEarnExtra && 'Complete core tasks first'}
            {canEarnExtra && 'Earn 1 star per task'}
          </div>
        </div>
        
        <div className="space-y-3">
          {extraChores.map((chore) => (
            <div 
              key={chore.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                chore.completed 
                  ? 'border-green-200 bg-green-50' 
                  : canEarnExtra
                    ? 'border-border hover:border-primary/50'
                    : 'border-muted bg-muted/50 opacity-60'
              }`}
            >
              <div className="flex items-center space-x-3">
                <button 
                  className="child-tap"
                  disabled={!canEarnExtra}
                >
                  {chore.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <div className={`h-6 w-6 border-2 rounded-full ${
                      canEarnExtra 
                        ? 'border-muted-foreground' 
                        : 'border-muted'
                    }`} />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{chore.title}</h3>
                  <p className="text-sm text-muted-foreground">{chore.description}</p>
                </div>
                {chore.completed && (
                  <Star className="h-5 w-5 text-accent" />
                )}
                {!chore.completed && canEarnExtra && (
                  <div className="text-sm text-muted-foreground">+1 star</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Today's Progress</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Core tasks completed:</span>
            <span className="font-medium">{completedCore}/2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Extra tasks completed:</span>
            <span className="font-medium">
              {extraChores.filter(c => c.completed).length}/{extraChores.length}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stars earned today:</span>
            <span className="font-medium text-accent">{mockStats.todayStars}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
