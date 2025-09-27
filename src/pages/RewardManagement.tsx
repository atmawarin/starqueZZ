import React from 'react'
import { Plus, Edit, Trash2, Star } from 'lucide-react'

// Mock data
const mockRewards = [
  { id: '1', title: 'Extra screen time', costStars: 5, active: true },
  { id: '2', title: 'Choose dinner', costStars: 3, active: true },
  { id: '3', title: 'Stay up 30 minutes later', costStars: 8, active: true },
  { id: '4', title: 'New toy', costStars: 20, active: false }
]

export function RewardManagement() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Reward Management</h1>
        <button className="btn-primary child-tap flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Reward</span>
        </button>
      </div>

      <div className="grid gap-4">
        {mockRewards.map((reward) => (
          <div key={reward.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-accent" />
                <div>
                  <h3 className="font-medium text-foreground">{reward.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {reward.costStars} stars • {reward.active ? 'Active' : 'Inactive'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-muted rounded-md">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-muted rounded-md text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
