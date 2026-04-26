import { Link } from 'react-router-dom'
import { tests, categories } from '../data/tests'
import { Sparkles, TrendingUp, Users } from 'lucide-react'
import AdSensePlaceholder from '../components/AdSensePlaceholder'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Descubra Sobre Você
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Testes de personalidade, inteligência e estilo de vida
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles size={20} />
              <span>Testes Infinitos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp size={20} />
              <span>Evolução do Perfil</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users size={20} />
              <span>Compare com Outros</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSensePlaceholder position="horizontal" />

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Categorias de Testes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-3xl">{category.icon === 'User' ? '👤' : category.icon === 'Brain' ? '🧠' : '❤️'}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {tests.filter(t => t.category === category.id).length} testes disponíveis
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* All Tests */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Todos os Testes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => (
              <Link
                key={test.id}
                to={`/teste/${test.id}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`h-32 bg-gradient-to-br ${test.color} flex items-center justify-center`}>
                    <span className="text-6xl">{test.icon === 'Target' ? '🎯' : test.icon === 'Lightbulb' ? '💡' : test.icon === 'Brain' ? '🧠' : test.icon === 'Layout' ? '📋' : test.icon === 'Users' ? '👥' : '❤️'}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {test.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {test.questions.length} perguntas
                      </span>
                      <span className="text-purple-600 dark:text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Começar →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <AdSensePlaceholder position="horizontal" />
      </div>
    </div>
  )
}
