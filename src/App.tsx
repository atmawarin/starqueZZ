import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ChildLoginPage } from './pages/ChildLoginPage'
import { ParentLoginPage } from './pages/ParentLoginPage'
import { ChildDashboard } from './pages/ChildDashboard'
import { ParentDashboard } from './pages/ParentDashboard'
import { ChoreManagement } from './pages/ChoreManagement'
import { RewardManagement } from './pages/RewardManagement'
import { StarStore } from './pages/StarStore'
import { ThemeManager } from './pages/ThemeManager'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/child-login" element={<ChildLoginPage />} />
          <Route path="/parent-login" element={<ParentLoginPage />} />
          
          {/* Child routes */}
          <Route path="/child/dashboard" element={<ChildDashboard />} />
          <Route path="/child/star-store" element={<StarStore />} />
          
          {/* Parent routes */}
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
          <Route path="/parent/chores" element={<ChoreManagement />} />
          <Route path="/parent/rewards" element={<RewardManagement />} />
          <Route path="/parent/themes" element={<ThemeManager />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
