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
  },
  {
    id: 'personalidade-lideranca',
    title: 'Teste de Liderança',
    description: 'Descubra seu potencial como líder',
    category: 'personalidade',
    icon: 'Crown',
    color: 'from-amber-500 to-yellow-600',
    questions: [
      {
        id: 1,
        text: 'Você toma iniciativa em situações de grupo?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você consegue motivar outras pessoas?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você assume responsabilidade por erros da equipe?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Depende', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você toma decisões difíceis sob pressão?',
        options: [
          { text: 'Sim, com confiança', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Evito decisões', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você ouve opiniões diferentes das suas?',
        options: [
          { text: 'Sim, valorizo', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Prefiro minha opinião', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você delega tarefas eficientemente?',
        options: [
          { text: 'Sim, muito bem', score: 10 },
          { text: 'Bem', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você inspira confiança nos outros?',
        options: [
          { text: 'Sim, muito', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não muito', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você vislumbra o longo prazo?',
        options: [
          { text: 'Sim, claramente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Foco no presente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você resolve conflitos entre pessoas?',
        options: [
          { text: 'Sim, eficientemente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Evito conflitos', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você busca constantemente melhorar?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      }
    ],
    trait: 'líder'
  },
  {
    id: 'inteligencia-memoria',
    title: 'Teste de Memória',
    description: 'Avalie sua capacidade de memorização',
    category: 'inteligencia',
    icon: 'Brain',
    color: 'from-violet-500 to-purple-600',
    questions: [
      {
        id: 1,
        text: 'Você lembra de nomes de pessoas que conheceu recentemente?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você lembra de detalhes de conversas antigas?',
        options: [
          { text: 'Muitos detalhes', score: 10 },
          { text: 'Bastantes', score: 7 },
          { text: 'Alguns', score: 4 },
          { text: 'Poucos', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você lembra de datas importantes?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você usa técnicas para memorizar coisas?',
        options: [
          { text: 'Sim, várias', score: 10 },
          { text: 'Algumas', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não uso', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você lembra onde colocou objetos?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Frequentemente esqueço', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você lembra de roteiros ou caminhos?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Com alguma facilidade', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Tenho muita dificuldade', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você lembra de informações que leu?',
        options: [
          { text: 'Muitas informações', score: 10 },
          { text: 'Bastantes', score: 7 },
          { text: 'Algumas', score: 4 },
          { text: 'Poucas', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você lembra de sonhos?',
        options: [
          { text: 'Vividamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você lembra de letras de músicas?',
        options: [
          { text: 'Muitas letras', score: 10 },
          { text: 'Algumas', score: 7 },
          { text: 'Poucas', score: 4 },
          { text: 'Quase nenhuma', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você revisa informações para memorizar melhor?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      }
    ],
    trait: 'memória'
  },
  {
    id: 'estilo-vida-equilibrio',
    title: 'Teste de Equilíbrio',
    description: 'Descubra seu equilíbrio entre trabalho e vida pessoal',
    category: 'estilo-vida',
    icon: 'Scale',
    color: 'from-cyan-500 to-blue-600',
    questions: [
      {
        id: 1,
        text: 'Você consegue separar trabalho da vida pessoal?',
        options: [
          { text: 'Perfeitamente', score: 10 },
          { text: 'Bem', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Dificilmente', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você tem tempo para hobbies?',
        options: [
          { text: 'Sim, suficiente', score: 10 },
          { text: 'Algum tempo', score: 7 },
          { text: 'Pouco tempo', score: 4 },
          { text: 'Quase nenhum', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você trabalha além do horário regular?',
        options: [
          { text: 'Raramente/Nunca', score: 10 },
          { text: 'Ocasionalmente', score: 7 },
          { text: 'Frequentemente', score: 4 },
          { text: 'Sempre', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você passa tempo com família/amigos?',
        options: [
          { text: 'Muito tempo', score: 10 },
          { text: 'Bastante', score: 7 },
          { text: 'Algum tempo', score: 4 },
          { text: 'Pouco tempo', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você tira férias regularmente?',
        options: [
          { text: 'Sim, anualmente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Nunca', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você se sente sobrecarregado?',
        options: [
          { text: 'Raramente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Frequentemente', score: 4 },
          { text: 'Sempre', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você prioriza seu bem-estar?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você consegue relaxar no fim de semana?',
        options: [
          { text: 'Sim, completamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Parcialmente', score: 4 },
          { text: 'Não consigo', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você diz "não" quando precisa?',
        options: [
          { text: 'Sim, facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você está satisfeito com seu equilíbrio atual?',
        options: [
          { text: 'Muito satisfeito', score: 10 },
          { text: 'Satisfeito', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Insatisfeito', score: 1 }
        ]
      }
    ],
    trait: 'equilibrado'
  },
  {
    id: 'personalidade-empatia',
    title: 'Teste de Empatia',
    description: 'Descubra quão empático você é',
    category: 'personalidade',
    icon: 'Heart',
    color: 'from-rose-500 to-pink-600',
    questions: [
      {
        id: 1,
        text: 'Você sente o que outros sentem?',
        options: [
          { text: 'Intensamente', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você ouve atentamente os problemas dos outros?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você ajuda pessoas em necessidade?',
        options: [
          { text: 'Sempre que posso', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você entende diferentes perspectivas?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com esforço', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você se emociona com filmes/livros?',
        options: [
          { text: 'Muito', score: 10 },
          { text: 'Bastante', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Pouco', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você percebe o humor das pessoas?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você coloca-se no lugar do outro?',
        options: [
          { text: 'Naturalmente', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você é paciente com pessoas difíceis?',
        options: [
          { text: 'Muito paciente', score: 10 },
          { text: 'Geralmente paciente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Pouco paciente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você conforta pessoas tristes?',
        options: [
          { text: 'Sim, espontaneamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não sei como', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se preocupa com o bem-estar dos outros?',
        options: [
          { text: 'Muito', score: 10 },
          { text: 'Bastante', score: 7 },
          { text: 'Algum', score: 4 },
          { text: 'Pouco', score: 1 }
        ]
      }
    ],
    trait: 'empático'
  },
  {
    id: 'personalidade-resiliencia',
    title: 'Teste de Resiliência',
    description: 'Descubra sua capacidade de superar desafios',
    category: 'personalidade',
    icon: 'Shield',
    color: 'from-slate-500 to-gray-600',
    questions: [
      {
        id: 1,
        text: 'Você se recupera rápido de fracassos?',
        options: [
          { text: 'Muito rápido', score: 10 },
          { text: 'Relativamente rápido', score: 7 },
          { text: 'Leva um tempo', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você vê problemas como oportunidades?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você mantém esperança em situações difíceis?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Perco a esperança', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você adapta-se a mudanças?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Bem', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Tenho muita dificuldade', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você busca soluções em vez de focar no problema?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Foco no problema', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você aprende com erros?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você mantém calma sob pressão?',
        options: [
          { text: 'Muito calmo', score: 10 },
          { text: 'Calmo', score: 7 },
          { text: 'Um pouco tenso', score: 4 },
          { text: 'Muito tenso', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você pede ajuda quando precisa?',
        options: [
          { text: 'Sim, facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você persiste apesar de obstáculos?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Desisto facilmente', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se sente forte após superar desafios?',
        options: [
          { text: 'Muito mais forte', score: 10 },
          { text: 'Mais forte', score: 7 },
          { text: 'Um pouco', score: 4 },
          { text: 'Não sinto diferença', score: 1 }
        ]
      }
    ],
    trait: 'resiliente'
  },
  {
    id: 'personalidade-produtividade',
    title: 'Teste de Produtividade',
    description: 'Descubra o quão produtivo você é no dia a dia',
    category: 'personalidade',
    icon: 'Zap',
    color: 'from-orange-500 to-red-600',
    questions: [
      {
        id: 1,
        text: 'Você define metas diárias?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você evita distrações digitais?',
        options: [
          { text: 'Sim, completamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você usa técnicas de produtividade?',
        options: [
          { text: 'Sim, várias', score: 10 },
          { text: 'Algumas', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não uso', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você prioriza tarefas importantes?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você conclui tarefas no prazo?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Frequentemente atraso', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você faz pausas estratégicas?',
        options: [
          { text: 'Sim, regularmente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não faço pausas', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você organiza seu ambiente de trabalho?',
        options: [
          { text: 'Impecavelmente', score: 10 },
          { text: 'Bem organizado', score: 7 },
          { text: 'Moderadamente', score: 4 },
          { text: 'Bagunçado', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você delega tarefas quando necessário?',
        options: [
          { text: 'Sim, eficientemente', score: 10 },
          { text: 'Quando preciso', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Faço tudo eu mesmo', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você revisa seu progresso regularmente?',
        options: [
          { text: 'Sim, semanalmente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não reviso', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se sente satisfeito com sua produtividade?',
        options: [
          { text: 'Muito satisfeito', score: 10 },
          { text: 'Satisfeito', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Insatisfeito', score: 1 }
        ]
      }
    ],
    trait: 'produtivo'
  },
  {
    id: 'personalidade-comunicacao',
    title: 'Teste de Comunicação',
    description: 'Avalie suas habilidades de comunicação',
    category: 'personalidade',
    icon: 'MessageCircle',
    color: 'from-teal-500 to-emerald-600',
    questions: [
      {
        id: 1,
        text: 'Você se expressa claramente?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você ouve ativamente os outros?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você adapta seu estilo ao público?',
        options: [
          { text: 'Sim, naturalmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não adapto', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você resolve mal-entendidos facilmente?',
        options: [
          { text: 'Sim, facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Tenho muita dificuldade', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você dá feedback construtivo?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você se sente confortável falando em público?',
        options: [
          { text: 'Muito confortável', score: 10 },
          { text: 'Confortável', score: 7 },
          { text: 'Um pouco nervoso', score: 4 },
          { text: 'Muito nervoso', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você usa linguagem corporal eficazmente?',
        options: [
          { text: 'Sim, conscientemente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não presto atenção', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você faz perguntas para esclarecer?',
        options: [
          { text: 'Sim, frequentemente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Quase nunca', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você negocia conflitos?',
        options: [
          { text: 'Excelentemente', score: 10 },
          { text: 'Bem', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você resume informações complexas?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com esforço', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      }
    ],
    trait: 'comunicativo'
  },
  {
    id: 'inteligencia-foco',
    title: 'Teste de Foco',
    description: 'Avalie sua capacidade de concentração',
    category: 'inteligencia',
    icon: 'Eye',
    color: 'from-indigo-500 to-violet-600',
    questions: [
      {
        id: 1,
        text: 'Você mantém foco por longos períodos?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com pausas', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você elimina distrações ao trabalhar?',
        options: [
          { text: 'Sim, completamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você volta ao foco após interrupções?',
        options: [
          { text: 'Rapidamente', score: 10 },
          { text: 'Geralmente rápido', score: 7 },
          { text: 'Demora um pouco', score: 4 },
          { text: 'Tenho muita dificuldade', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você usa técnicas de concentração?',
        options: [
          { text: 'Sim, várias', score: 10 },
          { text: 'Algumas', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não uso', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você completa tarefas sem procrastinar?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Frequentemente protocrastino', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você prioriza uma tarefa de cada vez?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes multitarefa', score: 4 },
          { text: 'Frequento multitarefa', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você mantém foco em tarefas chatas?',
        options: [
          { text: 'Sim, bem', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Não consigo', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você define metas de curto prazo?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você revisa seu trabalho antes de entregar?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se sente satisfeito com seu foco?',
        options: [
          { text: 'Muito satisfeito', score: 10 },
          { text: 'Satisfeito', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Insatisfeito', score: 1 }
        ]
      }
    ],
    trait: 'focado'
  },
  {
    id: 'estilo-vida-financeiro',
    title: 'Teste de Hábitos Financeiros',
    description: 'Avalie sua relação com dinheiro',
    category: 'estilo-vida',
    icon: 'DollarSign',
    color: 'from-emerald-500 to-green-600',
    questions: [
      {
        id: 1,
        text: 'Você faz orçamento mensal?',
        options: [
          { text: 'Sim, detalhado', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não faço', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você poupa regularmente?',
        options: [
          { text: 'Sim, todo mês', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente/Nunca', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você controla gastos impulsivos?',
        options: [
          { text: 'Sim, muito bem', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você acompanha suas finanças?',
        options: [
          { text: 'Sim, semanalmente', score: 10 },
          { text: 'Mensalmente', score: 7 },
          { text: 'Ocasionalmente', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você tem reserva de emergência?',
        options: [
          { text: 'Sim, suficiente', score: 10 },
          { text: 'Parcial', score: 7 },
          { text: 'Pequena', score: 4 },
          { text: 'Não tenho', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você investe para o futuro?',
        options: [
          { text: 'Sim, regularmente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não invisto', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você evita dí desnecessárias?',
        options: [
          { text: 'Sim, completamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dívidas', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você pesquisa antes de comprar?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você planeja gastos grandes?',
        options: [
          { text: 'Sim, detalhadamente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Não planejo', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você se sente seguro financeiramente?',
        options: [
          { text: 'Muito seguro', score: 10 },
          { text: 'Seguro', score: 7 },
          { text: 'Mais ou menos', score: 4 },
          { text: 'Inseguro', score: 1 }
        ]
      }
    ],
    trait: 'financeiramente responsável'
  },
  {
    id: 'personalidade-otimismo',
    title: 'Teste de Otimismo',
    description: 'Descubra seu nível de otimismo',
    category: 'personalidade',
    icon: 'Sun',
    color: 'from-yellow-400 to-orange-500',
    questions: [
      {
        id: 1,
        text: 'Você vê o lado positivo das situações?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 2,
        text: 'Você acredita que as coisas vão melhorar?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dúvidas', score: 1 }
        ]
      },
      {
        id: 3,
        text: 'Você encara desafios como oportunidades?',
        options: [
          { text: 'Sempre', score: 10 },
          { text: 'Frequentemente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Vejo como problemas', score: 1 }
        ]
      },
      {
        id: 4,
        text: 'Você se sente esperançoso sobre o futuro?',
        options: [
          { text: 'Muito esperançoso', score: 10 },
          { text: 'Esperançoso', score: 7 },
          { text: 'Neutro', score: 4 },
          { text: 'Pessimista', score: 1 }
        ]
      },
      {
        id: 5,
        text: 'Você celebra pequenas vitórias?',
        options: [
          { text: 'Sim, sempre', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Raramente', score: 1 }
        ]
      },
      {
        id: 6,
        text: 'Você mantém pensamentos positivos?',
        options: [
          { text: 'Sim, naturalmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com esforço', score: 4 },
          { text: 'Tenho dificuldade', score: 1 }
        ]
      },
      {
        id: 7,
        text: 'Você supera pensamentos negativos?',
        options: [
          { text: 'Facilmente', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Com dificuldade', score: 4 },
          { text: 'Fico preso neles', score: 1 }
        ]
      },
      {
        id: 8,
        text: 'Você motiva outras pessoas?',
        options: [
          { text: 'Sim, frequentemente', score: 10 },
          { text: 'Às vezes', score: 7 },
          { text: 'Raramente', score: 4 },
          { text: 'Não muito', score: 1 }
        ]
      },
      {
        id: 9,
        text: 'Você ri e sorri frequentemente?',
        options: [
          { text: 'Muito', score: 10 },
          { text: 'Bastante', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Pouco', score: 1 }
        ]
      },
      {
        id: 10,
        text: 'Você acredita em suas capacidades?',
        options: [
          { text: 'Sim, muito', score: 10 },
          { text: 'Geralmente', score: 7 },
          { text: 'Às vezes', score: 4 },
          { text: 'Tenho dúvidas', score: 1 }
        ]
      }
    ],
    trait: 'otimista'
  }
]

export const categories = [
  { id: 'personalidade', name: 'Personalidade', icon: 'User', color: 'from-purple-500 to-indigo-600' },
  { id: 'inteligencia', name: 'Inteligência', icon: 'Brain', color: 'from-blue-500 to-cyan-600' },
  { id: 'estilo-vida', name: 'Estilo de Vida', icon: 'Heart', color: 'from-green-500 to-teal-600' }
]
