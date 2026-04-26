import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { calculateLevel } from '../lib/utils'
import { TrendingUp, Calendar, Award, Share2, Copy, Check } from 'lucide-react'
import AdSensePlaceholder from '../components/AdSensePlaceholder'

export default function Profile() {
  const [history, setHistory] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const testHistory = JSON.parse(localStorage.getItem('testHistory') || '[]')
    setHistory(testHistory)
  }, [])

  const levelInfo = calculateLevel(history.length)

  const handleShare = () => {
    const shareText = `🎯 Descubra sobre você!\n\nCompletei ${history.length} testes e alcancei o nível ${levelInfo.level} - ${levelInfo.title}!\n\nFaça os testes e descubra mais sobre você: ${window.location.href}`
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getAverageScore = () => {
    if (history.length === 0) return 0
    const total = history.reduce((sum, h) => sum + h.score, 0)
    return Math.round(total / history.length)
  }

  const getBestTrait = () => {
    if (history.length === 0) return null
    const traitCounts = {}
    history.forEach(h => {
      traitCounts[h.trait] = (traitCounts[h.trait] || 0) + 1
    })
    return Object.entries(traitCounts).sort((a, b) => b[1] - a[1])[0]
  }

  const bestTrait = getBestTrait()

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Level Card */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold">{levelInfo.level}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">{levelInfo.title}</h2>
              <p className="text-lg opacity-90 mb-4">
                Nível {levelInfo.level} • {history.length} testes completados
              </p>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500"
                  style={{ width: `${levelInfo.progress}%` }}
                />
              </div>
              <p className="text-sm mt-2 opacity-75">{levelInfo.progress.toFixed(0)}% para o próximo nível</p>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
            >
              {copied ? <Check size={20} /> : <Share2 size={20} />}
              <span>{copied ? 'Copiado!' : 'Compartilhar'}</span>
            </button>
          </div>
        </div>

        <AdSensePlaceholder position="horizontal" className="mb-8" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Média Geral</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{getAverageScore()}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Award className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Traito Destaque</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white capitalize">
                  {bestTrait ? bestTrait[0] : '-'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Calendar className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Último Teste</p>
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  {history.length > 0 ? new Date(history[0].date).toLocaleDateString('pt-BR') : '-'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Test History */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Histórico de Testes
          </h3>
          
          {history.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Você ainda não completou nenhum teste
              </p>
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-colors"
              >
                Começar Agora
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {result.testName}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(result.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {result.score}%
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {result.trait}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <AdSensePlaceholder position="horizontal" className="mt-8" />
      </div>
    </div>
  )
}
