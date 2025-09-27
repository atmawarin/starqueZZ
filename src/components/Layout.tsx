import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Settings, Star, Users } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  
  // Determine if we're in child or parent mode based on route
  const isChildMode = location.pathname.startsWith('/child')
  const isParentMode = location.pathname.startsWith('/parent')
  const isPublicRoute = !isChildMode && !isParentMode

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8" />
              <span className="text-xl font-bold">StarqueZZ</span>
            </Link>
            
            {!isPublicRoute && (
              <nav className="flex items-center space-x-4">
                {isChildMode && (
                  <>
                    <Link 
                      to="/child/dashboard" 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === '/child/dashboard' 
                          ? 'bg-primary-foreground/20' 
                          : 'hover:bg-primary-foreground/10'
                      }`}
                    >
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                    <Link 
                      to="/child/star-store" 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === '/child/star-store' 
                          ? 'bg-primary-foreground/20' 
                          : 'hover:bg-primary-foreground/10'
                      }`}
                    >
                      <Star className="h-4 w-4" />
                      <span>Star Store</span>
                    </Link>
                  </>
                )}
                
                {isParentMode && (
                  <>
                    <Link 
                      to="/parent/dashboard" 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === '/parent/dashboard' 
                          ? 'bg-primary-foreground/20' 
                          : 'hover:bg-primary-foreground/10'
                      }`}
                    >
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                    <Link 
                      to="/parent/chores" 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === '/parent/chores' 
                          ? 'bg-primary-foreground/20' 
                          : 'hover:bg-primary-foreground/10'
                      }`}
                    >
                      <Settings className="h-4 w-4" />
                      <span>Chores</span>
                    </Link>
                    <Link 
                      to="/parent/rewards" 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === '/parent/rewards' 
                          ? 'bg-primary-foreground/20' 
                          : 'hover:bg-primary-foreground/10'
                      }`}
                    >
                      <Star className="h-4 w-4" />
                      <span>Rewards</span>
                    </Link>
                    <Link 
                      to="/parent/themes" 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === '/parent/themes' 
                          ? 'bg-primary-foreground/20' 
                          : 'hover:bg-primary-foreground/10'
                      }`}
                    >
                      <Users className="h-4 w-4" />
                      <span>Themes</span>
                    </Link>
                  </>
                )}
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 StarqueZZ - Turning chores into epic quests! ✨
          </p>
        </div>
      </footer>
    </div>
  )
}
