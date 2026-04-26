import { useState, useEffect } from 'react'
import { Trophy, Medal, Award, Crown } from 'lucide-react'
import AdSensePlaceholder from '../components/AdSensePlaceholder'

// Simulated ranking data (in a real app, this would come from a backend)
const generateMockRanking = () => {
  const names = ['Ana Silva', 'Bruno Costa', 'Carla Oliveira', 'Daniel Santos', 'Elena Ferreira', 'Felipe Lima', 'Gabriela Rocha', 'Henrique Martins', 'Isabella Nunes', 'João Pedro']
  const traits = ['disciplinado', 'criativo', 'analítico', 'organizado', 'extrovertido', 'saudável']
  
  return names.map((name, index) => ({
    id: index + 1,
    name,
    level: Math.floor(Math.random() * 7) + 1,
    totalTests: Math.floor(Math.random() * 50) + 5,
    averageScore: Math.floor(Math.random() * 30) + 70,
    bestTrait: traits[Math.floor(Math.random() * traits.length)]
  })).sort((a, b) => b.averageScore - a.averageScore)
}

export default function Ranking() {
  const [ranking, setRanking] = useState([])
  const [userRank, setUserRank] = useState(null)

  useEffect(() => {
    const mockRanking = generateMockRanking()
    setRanking(mockRanking)
    
    // Add current user to ranking if they have test history
    const history = JSON.parse(localStorage.getItem('testHistory') || '[]')
    if (history.length > 0) {
      const averageScore = Math.round(history.reduce((sum, h) => sum + h.score, 0) / history.length)
      const userData = {
        id: 999,
        name: 'Você',
        level: Math.floor(history.length / 10) + 1,
        totalTests: history.length,
        averageScore,
        bestTrait: history[0].trait
      }
      setUserRank(userData)
    }
  }, [])

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="text-yellow-500" size={24} />
    if (rank === 2) return <Medal className="text-gray-400" size={24} />
    if (rank === 3) return <Award className="text-amber-600" size={24} />
    return <span className="text-lg font-bold text-gray-600 dark:text-gray-400">#{rank}</span>
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Ranking Global
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Compare seu progresso com outros usuários
          </p>
        </div>

        <AdSensePlaceholder position="horizontal" className="mb-8" />

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {ranking.slice(0, 3).map((user, index) => {
            const order = index === 1 ? 0 : index === 0 ? 1 : 2
            const heights = ['h-48', 'h-56', 'h-40']
            const bgColors = [
              'from-yellow-400 to-yellow-500',
              'from-gray-300 to-gray-400',
              'from-amber-500 to-amber-600'
            ]
            
            return (
              <div
                key={user.id}
                className={`flex flex-col items-center ${order === 1 ? 'md:order-first' : ''}`}
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${bgColors[order]} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  {getRankIcon(index + 1)}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nível {user.level}</p>
                  <div className={`mt-4 w-full bg-gradient-to-t ${bgColors[order]} ${heights[order]} rounded-t-lg flex items-end justify-center pb-4`}>
                    <span className="text-2xl font-bold text-white">{user.averageScore}%</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Full Ranking List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Classificação Completa
          </h3>
          
          <div className="space-y-3">
            {ranking.map((user, index) => (
              <div
                key={user.id}
                className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                  index < 3
                    ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
                    : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {getRankIcon(index + 1)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{user.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Nível {user.level} • {user.totalTests} testes
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    {user.averageScore}%
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                    {user.bestTrait}
                  </p>
                </div>
              </div>
            ))}

            {/* User's Rank */}
            {userRank && (
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border-2 border-green-500 dark:border-green-400">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">#?</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{userRank.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Nível {userRank.level} • {userRank.totalTests} testes
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">
                    {userRank.averageScore}%
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                    {userRank.bestTrait}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <AdSensePlaceholder position="horizontal" className="mt-8" />
      </div>
    </div>
  )
}
