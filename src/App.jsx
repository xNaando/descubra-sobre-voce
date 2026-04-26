import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Test from './pages/Test'
import Profile from './pages/Profile'
import Ranking from './pages/Ranking'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Lida com redirecionamento do 404.html do GitHub Pages
    const searchParams = new URLSearchParams(location.search)
    const redirectPath = searchParams.get('p')
    const redirectQuery = searchParams.get('q')

    if (redirectPath) {
      let newPath = '/' + redirectPath.replace(/~/g, '&')
      if (redirectQuery) {
        newPath += '?' + redirectQuery.replace(/~/g, '&')
      }
      navigate(newPath + location.hash, { replace: true })
    }
  }, [location, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste/:id" element={<Test />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
