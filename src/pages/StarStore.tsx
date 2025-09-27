import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'

// Mock data
const mockRewards = [
  { id: '1', title: 'Extra screen time', costStars: 5, available: true },
  { id: '2', title: 'Choose dinner', costStars: 3, available: true },
  { id: '3', title: 'Stay up 30 minutes later', costStars: 8, available: false },
  { id: '4', title: 'New toy', costStars: 20, available: true }
]

export function StarStore() {
  const totalStars = 15 // Mock current star balance

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Star Store</h1>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Star className="h-6 w-6 text-accent" />
          <span className="text-2xl font-bold text-accent">{totalStars}</span>
          <span className="text-muted-foreground">stars available</span>
        </div>
        <p className="text-muted-foreground">Redeem your stars for awesome rewards!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockRewards.map((reward) => (
          <div key={reward.id} className="card p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-lg font-bold text-accent">{reward.costStars}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground">{reward.title}</h3>
              
              <button 
                className={`w-full child-tap flex items-center justify-center space-x-2 ${
                  reward.available && totalStars >= reward.costStars
                    ? 'btn-primary'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
                disabled={!reward.available || totalStars < reward.costStars}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>
                  {!reward.available 
                    ? 'Not Available' 
                    : totalStars < reward.costStars 
                      ? 'Not Enough Stars' 
                      : 'Redeem Now'
                  }
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
