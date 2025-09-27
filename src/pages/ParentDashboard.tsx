import React from 'react'
import { Star, Users, CheckCircle, TrendingUp, Clock } from 'lucide-react'

// Mock data for prototyping
const mockChildren = [
  {
    id: '1',
    name: 'Zen',
    totalStars: 15,
    todayStars: 0,
    streak: 3,
    pendingApprovals: 2,
    weeklyProgress: 85
  },
  {
    id: '2',
    name: 'Zia',
    totalStars: 12,
    todayStars: 1,
    streak: 1,
    pendingApprovals: 0,
    weeklyProgress: 60
  }
]

const mockStats = {
  totalChildren: 2,
  totalPendingApprovals: 2,
  weeklyCompletions: 12,
  totalStarsAwarded: 27
}

export function ParentDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Parent Dashboard
        </h1>
        <p className="text-muted-foreground">
          Track your children's progress and manage their chores
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.totalChildren}</div>
          <div className="text-sm text-muted-foreground">Children</div>
        </div>
        
        <div className="card p-4 text-center">
          <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.totalPendingApprovals}</div>
          <div className="text-sm text-muted-foreground">Pending Approvals</div>
        </div>
        
        <div className="card p-4 text-center">
          <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.weeklyCompletions}</div>
          <div className="text-sm text-muted-foreground">This Week</div>
        </div>
        
        <div className="card p-4 text-center">
          <Star className="h-8 w-8 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{mockStats.totalStarsAwarded}</div>
          <div className="text-sm text-muted-foreground">Stars Awarded</div>
        </div>
      </div>

      {/* Children Progress */}
      <div className="grid md:grid-cols-2 gap-6">
        {mockChildren.map((child) => (
          <div key={child.id} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">{child.name}</h3>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="font-bold text-accent">{child.totalStars}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Today's Stars:</span>
                <span className="font-medium">{child.todayStars}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Streak:</span>
                <span className="font-medium">{child.streak} days</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weekly Progress:</span>
                <span className="font-medium">{child.weeklyProgress}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${child.weeklyProgress}%` }}
                />
              </div>
            </div>
            
            {child.pendingApprovals > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-yellow-800 font-medium">
                    {child.pendingApprovals} task{child.pendingApprovals > 1 ? 's' : ''} waiting for approval
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn-primary child-tap flex items-center justify-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Review Tasks</span>
          </button>
          
          <button className="btn-secondary child-tap flex items-center justify-center space-x-2">
            <Star className="h-4 w-4" />
            <span>Manage Rewards</span>
          </button>
          
          <button className="btn-primary child-tap flex items-center justify-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Add Child</span>
          </button>
          
          <button className="btn-secondary child-tap flex items-center justify-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>View Reports</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div className="flex-1">
              <p className="text-sm font-medium">Zen completed "Make your bed"</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
            <Star className="h-4 w-4 text-accent" />
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <Clock className="h-5 w-5 text-yellow-500" />
            <div className="flex-1">
              <p className="text-sm font-medium">Zia completed "Brush teeth" - needs approval</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <Star className="h-5 w-5 text-accent" />
            <div className="flex-1">
              <p className="text-sm font-medium">Zen redeemed "Extra screen time" for 5 stars</p>
              <p className="text-xs text-muted-foreground">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
