export const tests = [
  {
    id: 'personalidade-disciplina',
    title: 'Teste de Disciplina',
    description: 'Descubra o quão disciplinado você é no dia a dia',
    category: 'personalidade',
    icon: 'Target',
    color: 'from-purple-500 to-indigo-600',
    questions: [
      {
        id: 1,
        text: 'Você costuma acordar no mesmo horário todos os dias?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Na maioria das vezes', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente/Nunca', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Quando tem uma meta, você segue um plano estruturado?',
        options: [
          { text: 'Sim, rigorosamente', score: 10 },
          { text: 'Geralmente sim', score: 7 },
          { text: 'Depende do humor', score: 4 },
          { text: 'Não, sou espontâneo', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você consegue manter foco em uma tarefa por longos períodos?',
        options: [
          { text: 'Sim, facilmente', score: 10 },
          { text: 'Com algum esforço', score: 7 },
          { text: 'Preciso de pausas frequentes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você adia tarefas importantes?',
        options: [
          { text: 'Nunca', score: 10 },
          { text: 'Raramente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Frequentemente', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você mantém hábitos saudáveis (exercício, alimentação)?',
        options: [
          { text: 'Sim, muito consistente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Quando lembro', score: 4 },
          { text: 'Não tenho hábitos fixos', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você organiza seu tempo com antecedência?',
        options: [
          { text: 'Sempre planejo', score: 10 },
          { text: 'Planejo a maior parte', score: 7 },
          { text: 'Planejo algumas coisas', score: 4 },
          { text: 'Vou no improviso', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Como você lida com distrações durante o trabalho?',
        options: [
          { text: 'Elimino todas as distrações', score: 10 },
          { text: 'Tento minimizar', score: 7 },
          { text: 'Me distraio mas volto', score: 4 },
          { text: 'Me distraio facilmente', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você cumpre promessas que faz a si mesmo?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Quase sempre', score: 7 },
          { text: 'Depende da promessa', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você mantém rotinas mesmo nos fins de semana?',
        options: [
          { text: 'Sim, consistente', score: 10 },
          { text: 'A maioria das rotinas', score: 7 },
          { text: 'Algumas rotinas', score: 4 },
          { text: 'Não, mudo tudo', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Quando começa algo, você termina?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Na maioria das vezes', score: 7 },
          { text: 'Depende do projeto', score: 4 },
          { text: 'Abandono facilmente', score: 1 }
        ]
      }
    ],
    trait: 'disciplinado'
  },
  {
    id: 'personalidade-criatividade',
    title: 'Teste de Criatividade',
    description: 'Descubra o seu potencial criativo',
    category: 'personalidade',
    icon: 'Lightbulb',
    color: 'from-yellow-500 to-orange-600',
    questions: [
      {
        id: 1,
        text: 'Você costuma ter ideias fora da caixa?',
        options: [
          { text: 'O tempo todo', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Como você resolve problemas complexos?',
        options: [
          { text: 'Busco soluções inovadoras', score: 10 },
          { text: 'Tento abordagens diferentes', score: 7 },
          { text: 'Sigo métodos conhecidos', score: 4 },
          { text: 'Sigo instruções', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você gosta de experimentar coisas novas?',
        options: [
          { text: 'Adoro novidades', score: 10 },
          { text: 'Gosto bastante', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Prefiro o conhecido', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você se expressa através de arte ou música?',
        options: [
          { text: 'Sim, ativamente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você faz conexões entre coisas aparentemente não relacionadas?',
        options: [
          { text: 'Frequentemente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Quase nunca', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Como você lida com restrições?',
        options: [
          { text: 'Vejo como desafio criativo', score: 10 },
          { text: 'Tento contornar', score: 7 },
          { text: 'Sigo as regras', score: 4 },
          { text: 'Me sinto limitado', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você tem hobbies criativos?',
        options: [
          { text: 'Vários', score: 10 },
          { text: 'Alguns', score: 7 },
          { text: 'Um ou dois', score: 4 },
          { text: 'Nenhum', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você imagina cenários futuros alternativos?',
        options: [
          { text: 'Constantemente', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você gosta de brainstorming?',
        options: [
          { text: 'Adoro', score: 10 },
          { text: 'Gosto', score: 7 },
          { text: 'É okay', score: 4 },
          { text: 'Prefiro trabalhar sozinho', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se inspira no cotidiano?',
        options: [
          { text: 'Sim, tudo inspira', score: 10 },
          { text: 'Muitas coisas', score: 7 },
          { text: 'Algumas coisas', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      }
    ],
    trait: 'criativo'
  },
  {
    id: 'inteligencia-logica',
    title: 'Teste de Lógica',
    description: 'Avalie seu raciocínio lógico e analítico',
    category: 'inteligencia',
    icon: 'Brain',
    color: 'from-blue-500 to-cyan-600',
    questions: [
      {
        id: 1,
        text: 'Você gosta de resolver quebra-cabeças?',
        options: [
          { text: 'Adoro', score: 10 },
          { text: 'Gosto bastante', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não muito', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você consegue identificar padrões facilmente?',
        options: [
          { text: 'Muito facilmente', score: 10 },
          { text: 'Com relativa facilidade', score: 7 },
          { text: 'Com algum esforço', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você analisa todos os ângulos antes de decidir?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Decido rápido', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você gosta de matemática ou ciências?',
        options: [
          { text: 'Muito', score: 10 },
          { text: 'Gosto', score: 7 },
          { text: 'É okay', score: 4 },
          { text: 'Não gosto', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você consegue seguir argumentos complexos?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Com alguma concentração', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Não consigo', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você organiza informações de forma estruturada?',
        options: [
          { text: 'Sim, naturalmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Quando preciso', score: 4 },
          { text: 'Não sou organizado', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você gosta de jogos de estratégia?',
        options: [
          { text: 'Adoro', score: 10 },
          { text: 'Gosto', score: 7 },
          { text: 'Às vezes jogo', score: 4 },
          { text: 'Não gosto', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você faz perguntas para entender melhor?',
        options: [
          { text: 'Constantemente', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você consegue prever consequências?',
        options: [
          { text: 'Muito bem', score: 10 },
          { text: 'Bem', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você busca evidências antes de acreditar?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Aceito facilmente', score: 1 }
        ]
      }
    ],
    trait: 'analítico'
  },
  {
    id: 'estilo-vida-organizacao',
    title: 'Teste de Organização',
    description: 'Descubra o quão organizado é seu estilo de vida',
    category: 'estilo-vida',
    icon: 'Layout',
    color: 'from-green-500 to-teal-600',
    questions: [
      {
        id: 1,
        text: 'Seu ambiente de trabalho está organizado?',
        options: [
          { text: 'Impecavelmente', score: 10 },
          { text: 'Bem organizado', score: 7 },
          { text: 'Moderadamente', score: 4 },
          { text: 'Bagunçado', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você tem um sistema para suas tarefas?',
        options: [
          { text: 'Sim, muito eficiente', score: 10 },
          { text: 'Tenho um sistema', score: 7 },
          { text: 'Às vezes organizo', score: 4 },
          { text: 'Vou no improviso', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você mantém seus arquivos digitais organizados?',
        options: [
          { text: 'Perfeitamente', score: 10 },
          { text: 'Bem organizados', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Bagunçados', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você planeja suas finanças?',
        options: [
          { text: 'Detalhadamente', score: 10 },
          { text: 'Bem planejado', score: 7 },
          { text: 'Basicamente', score: 4 },
          { text: 'Não planejo', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Sua casa está organizada?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você usa calendário ou agenda?',
        options: [
          { text: 'Diariamente', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente/Nunca', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você delega tarefas quando necessário?',
        options: [
          { text: 'Sim, eficientemente', score: 10 },
          { text: 'Quando preciso', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Faço tudo eu mesmo', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você tem rotinas de limpeza/organização?',
        options: [
          { text: 'Sim, bem definidas', score: 10 },
          { text: 'Algumas rotinas', score: 7 },
          { text: 'Esporadicamente', score: 4 },
          { text: 'Não tenho', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você consegue encontrar coisas rapidamente?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes demoro', score: 4 },
          { text: 'Frequentemente perco', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você revisa e ajusta seus sistemas?',
        options: [
          { text: 'Regularmente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Nunca', score: 1 }
        ]
      }
    ],
    trait: 'organizado'
  },
  {
    id: 'personalidade-extroversao',
    title: 'Teste de Extroversão',
    description: 'Descubra seu nível de extroversão social',
    category: 'personalidade',
    icon: 'Users',
    color: 'from-pink-500 to-rose-600',
    questions: [
      {
        id: 1,
        text: 'Você se sente energizado em eventos sociais?',
        options: [
          { text: 'Muito energizado', score: 10 },
          { text: 'Bem energizado', score: 7 },
          { text: 'Depende do evento', score: 4 },
          { text: 'Me drena energia', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você inicia conversas com desconhecidos?',
        options: [
          { text: 'Frequentemente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Quase nunca', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você prefere trabalhar em equipe?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Prefiro sozinho', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você gosta de ser o centro das atenções?',
        options: [
          { text: 'Adoro', score: 10 },
          { text: 'Gosto', score: 7 },
          { text: 'É okay', score: 4 },
          { text: 'Não gosto', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você tem muitos amigos?',
        options: [
          { text: 'Sim, muitos', score: 10 },
          { text: 'Bastantes', score: 7 },
          { text: 'Alguns', score: 4 },
          { text: 'Poucos', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você compartilha pensamentos facilmente?',
        options: [
          { text: 'Sim, muito', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com pessoas próximas', score: 4 },
          { text: 'Sou reservado', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você fala primeiro em discussões?',
        options: [
          { text: 'Frequentemente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Prefiro ouvir', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você gosta de festas grandes?',
        options: [
          { text: 'Adoro', score: 10 },
          { text: 'Gosto', score: 7 },
          { text: 'Em pequenas doses', score: 4 },
          { text: 'Não gosto', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você se sente confortável em público?',
        options: [
          { text: 'Muito confortável', score: 10 },
          { text: 'Confortável', score: 7 },
          { text: 'Um pouco nervoso', score: 4 },
          { text: 'Muito nervoso', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você busca interação social quando está sozinho?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Prefiro ficar sozinho', score: 1 }
        ]
      }
    ],
    trait: 'extrovertido'
  },
  {
    id: 'estilo-vida-saude',
    title: 'Teste de Vida Saudável',
    description: 'Avalie seus hábitos de saúde e bem-estar',
    category: 'estilo-vida',
    icon: 'Heart',
    color: 'from-red-500 to-pink-600',
    questions: [
      {
        id: 1,
        text: 'Você pratica exercícios regularmente?',
        options: [
          { text: '3+ vezes por semana', score: 10 },
          { text: '1-2 vezes por semana', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente/Nunca', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você dorme 7-8 horas por noite?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você mantém uma alimentação balanceada?',
        options: [
          { text: 'Muito balanceada', score: 10 },
          { text: 'Balanceada', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Não balanceada', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você bebe água regularmente?',
        options: [
          { text: '2L+ por dia', score: 10 },
          { text: '1-2L por dia', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Pouco', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você gerencia o estresse?',
        options: [
          { text: 'Muito bem', score: 10 },
          { text: 'Bem', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Mal', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você evita hábitos prejudiciais (fumo, excesso de álcool)?',
        options: [
          { text: 'Sim, completamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não evito', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você faz check-ups médicos regularmente?',
        options: [
          { text: 'Anualmente', score: 10 },
          { text: 'Com certa frequência', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Nunca', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você pratica atividades relaxantes?',
        options: [
          { text: 'Diariamente', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você mantém peso saudável?',
        options: [
          { text: 'Sim', score: 10 },
          { text: 'Próximo', score: 7 },
          { text: 'Trabalhando nisso', score: 4 },
          { text: 'Não', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se sente energizado no dia a dia?',
        options: [
          { text: 'Muito energizado', score: 10 },
          { text: 'Bem energizado', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Pouco energizado', score: 1 }
        ]
      }
    ],
    trait: 'saudável'
  }
]

export const categories = [
  { id: 'personalidade', name: 'Personalidade', icon: 'User', color: 'from-purple-500 to-indigo-600' },
  { id: 'inteligencia', name: 'Inteligência', icon: 'Brain', color: 'from-blue-500 to-cyan-600' },
  { id: 'estilo-vida', name: 'Estilo de Vida', icon: 'Heart', color: 'from-green-500 to-teal-600' }
]
