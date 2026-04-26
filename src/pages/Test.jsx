import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { tests } from '../data/tests'
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'
import AdSensePlaceholder from '../components/AdSensePlaceholder'

export default function Test() {
  const { id } = useParams()
  const navigate = useNavigate()
  const test = tests.find(t => t.id === id)
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (!test) {
      navigate('/')
    }
  }, [test, navigate])

  if (!test) return null

  const handleAnswer = (questionId, score) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }))
    
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Calculate final score
      const totalScore = Object.values({ ...answers, [questionId]: score }).reduce((sum, s) => sum + s, 0)
      const maxScore = test.questions.length * 10
      const finalScore = Math.round((totalScore / maxScore) * 100)
      setScore(finalScore)
      
      // Save result to localStorage
      const userId = localStorage.getItem('userId') || 'user_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('userId', userId)
      
      const history = JSON.parse(localStorage.getItem('testHistory') || '[]')
      const newResult = {
        testId: test.id,
        testName: test.title,
        score: finalScore,
        trait: test.trait,
        date: new Date().toISOString(),
        userId
      }
      localStorage.setItem('testHistory', JSON.stringify([newResult, ...history]))
      
      setShowResult(true)
    }
  }

  const goToQuestion = (index) => {
    setCurrentQuestion(index)
  }

  const restartTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setScore(0)
  }

  if (showResult) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl text-center">
            <div className={`w-32 h-32 bg-gradient-to-br ${test.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <span className="text-6xl">🎉</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {test.title}
            </h2>
            
            <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              {score}%
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Você é <span className="font-bold text-purple-600 dark:text-purple-400">{score}% {test.trait}</span>
            </p>

            <AdSensePlaceholder position="horizontal" className="mb-8" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Voltar ao Início
              </button>
              <button
                onClick={restartTest}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-colors"
              >
                Refazer Teste
              </button>
            </div>
          </div>

          <AdSensePlaceholder position="horizontal" className="mt-8" />
        </div>
      </div>
    )
  }

  const question = test.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / test.questions.length) * 100

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Pergunta {currentQuestion + 1} de {test.questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <AdSensePlaceholder position="horizontal" className="mb-8" />

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
            {question.text}
          </h2>

          <div className="space-y-4" key={currentQuestion}>
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option.score)}
                className="w-full text-left p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-purple-500 group-hover:bg-purple-500 flex items-center justify-center transition-colors">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-white">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Question Navigation */}
        <div className="flex justify-center gap-2 flex-wrap">
          {test.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuestion(index)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                index === currentQuestion
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                  : answers[test.questions[index].id]
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {answers[test.questions[index].id] ? (
                <CheckCircle size={20} />
              ) : (
                index + 1
              )}
            </button>
          ))}
        </div>

        <AdSensePlaceholder position="horizontal" className="mt-8" />
      </div>
    </div>
  )
}
