import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Star, ArrowLeft, Users, Mail, Lock } from 'lucide-react'

export function ParentLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Mock authentication - in real app, this would validate credentials
    setTimeout(() => {
      setIsLoading(false)
      navigate('/parent/dashboard')
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Users className="h-16 w-16 text-secondary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Parent Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage chores, rewards, and track your children's progress
        </p>
      </div>

      <div className="card p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="input pl-10"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input pl-10"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-secondary w-full child-tap flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <Star className="h-4 w-4" />
                <span>Access Dashboard</span>
              </>
            )}
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          New to StarqueZZ?{' '}
          <Link to="/parent/signup" className="text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
