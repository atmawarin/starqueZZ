import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Users, Sparkles, Heart } from 'lucide-react'

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <Star className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Welcome to <span className="text-primary">StarqueZZ</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform everyday chores into epic quests where kids collect stars, 
          unlock prizes, and shine like heroes at home! ✨
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/child-login" 
            className="btn-primary text-lg px-8 py-4 child-tap flex items-center justify-center space-x-2"
          >
            <Sparkles className="h-5 w-5" />
            <span>I'm a Kid!</span>
          </Link>
          <Link 
            to="/parent-login" 
            className="btn-secondary text-lg px-8 py-4 child-tap flex items-center justify-center space-x-2"
          >
            <Users className="h-5 w-5" />
            <span>I'm a Parent!</span>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-12">
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-4">
            <Star className="h-12 w-12 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Earn Stars</h3>
          <p className="text-muted-foreground">
            Complete your daily chores to earn stars and unlock amazing rewards!
          </p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-secondary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Family Fun</h3>
          <p className="text-muted-foreground">
            Parents can track progress and set up custom rewards for their little stars.
          </p>
        </div>
        
        <div className="card p-6 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Personalized</h3>
          <p className="text-muted-foreground">
            Choose your favorite themes and make the app uniquely yours!
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">For Kids</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">1.</span>
                <span>Log in with your special PIN</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">2.</span>
                <span>Complete your daily core tasks (2 per day)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">3.</span>
                <span>Do extra tasks to earn bonus stars</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">4.</span>
                <span>Redeem stars for awesome rewards!</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">For Parents</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-secondary font-bold">1.</span>
                <span>Create accounts for your children</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-secondary font-bold">2.</span>
                <span>Set up daily chores and rewards</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-secondary font-bold">3.</span>
                <span>Approve completed tasks</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-secondary font-bold">4.</span>
                <span>Track progress and celebrate achievements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
