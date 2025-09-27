import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Star, ArrowLeft, Sparkles } from 'lucide-react'

export function ChildLoginPage() {
  const [pin, setPin] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Mock authentication - in real app, this would validate PIN
    setTimeout(() => {
      setIsLoading(false)
      navigate('/child/dashboard')
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
          <Star className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome Back, Star!
        </h1>
        <p className="text-muted-foreground">
          Enter your special PIN to continue your quest
        </p>
      </div>

      <div className="card p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-foreground mb-2">
              Your Special PIN
            </label>
            <input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter your PIN"
              className="input w-full text-center text-2xl tracking-widest"
              maxLength={6}
              required
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Ask your parent for your special PIN
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || pin.length < 4}
            className="btn-primary w-full child-tap flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                <span>Entering...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Start My Quest!</span>
              </>
            )}
          </button>
        </form>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Don't have a PIN yet? Ask your parent to set one up for you!
        </p>
      </div>
    </div>
  )
}
