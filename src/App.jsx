import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Test from './pages/Test'
import Profile from './pages/Profile'
import Ranking from './pages/Ranking'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste/:id" element={<Test />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
