import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'
import AdSensePlaceholder from '../components/AdSensePlaceholder'

export default function NotFound() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <AlertCircle size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-colors font-medium"
          >
            <Home size={20} />
            Voltar para a página inicial
          </Link>
        </div>

        <AdSensePlaceholder position="horizontal" />
      </div>
    </div>
  )
}
