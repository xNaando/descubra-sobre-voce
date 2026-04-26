# Descubra + Sobre Você

Uma aplicação web completa de testes de personalidade, inteligência e estilo de vida, com sistema de perfil evolutivo, compartilhamento de resultados e ranking de usuários.

## 🎯 Funcionalidades

- **Testes Infinitos**: 6 categorias de testes (Personalidade, Inteligência, Estilo de Vida)
- **Resultados Compartilháveis**: Compartilhe seus resultados nas redes sociais
- **Comparação com Outros**: Ranking global para comparar seu progresso
- **Evolução do Perfil**: Sistema de níveis baseado na quantidade de testes completados
- **Histórico Completo**: Acompanhe sua evolução ao longo do tempo
- **Google AdSense Ready**: Preparado para integração com anúncios Google

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **TailwindCSS** - Framework CSS utilitário
- **React Router** - Roteamento para SPA
- **Lucide React** - Ícones modernos
- **LocalStorage** - Persistência de dados no navegador

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/descubra-sobre-voce.git
cd descubra-sobre-voce

# Instale as dependências
npm install
```

## 🛠️ Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
# Crie o build de produção
npm run build

# Preview do build de produção
npm run preview
```

## 🌐 Deploy no GitHub Pages

### Método Automático (Recomendado)

```bash
# Deploy automático para GitHub Pages
npm run deploy
```

Este comando irá:
1. Criar o build de produção
2. Fazer deploy para o branch `gh-pages`
3. Atualizar o GitHub Pages

### Método Manual

1. **Configure o repositório no GitHub**:
   - Crie um repositório no GitHub
   - Adicione o remote: `git remote add origin https://github.com/seu-usuario/descubra-sobre-voce.git`

2. **Configure o GitHub Pages**:
   - Vá em Settings > Pages
   - Em "Source", selecione `gh-pages` branch
   - Clique em Save

3. **Faça o deploy**:
   ```bash
   npm run deploy
   ```

4. **Acesse seu site**:
   - Após alguns minutos, seu site estará disponível em:
   - `https://seu-usuario.github.io/descubra-sobre-voce/`

### Configuração do Base Path

Se você mudar o nome do repositório, atualize o `base` em `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/novo-nome-do-repositorio/',
})
```

## 📝 Google AdSense

Para integrar o Google AdSense:

1. **Crie uma conta no Google AdSense**:
   - Acesse [https://adsense.google.com](https://adsense.google.com)
   - Crie sua conta e adicione seu site

2. **Adicione o código no index.html**:
   ```html
   <!-- Substitua ca-pub-XXXXXXXXXXXXXXXX pelo seu código -->
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```

3. **Substitua os placeholders**:
   - Os componentes `AdSensePlaceholder` em `src/components/AdSensePlaceholder.jsx` podem ser substituídos pelos códigos reais do AdSense

4. **Aguarde a aprovação**:
   - O Google irá revisar seu site antes de exibir anúncios
   - Certifique-se de ter conteúdo suficiente e original

## 📂 Estrutura do Projeto

```
descubra-sobre-voce/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── AdSensePlaceholder.jsx
│   │   └── Navigation.jsx
│   ├── data/           # Dados dos testes
│   │   └── tests.js
│   ├── lib/            # Funções utilitárias
│   │   └── utils.js
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Test.jsx
│   │   ├── Profile.jsx
│   │   └── Ranking.jsx
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Entry point
│   └── index.css       # Estilos globais
├── index.html          # Template HTML
├── package.json        # Dependências
├── tailwind.config.js  # Configuração Tailwind
├── vite.config.js      # Configuração Vite
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Adicionar Novos Testes

Edite `src/data/tests.js` e adicione novos objetos ao array `tests`:

```javascript
{
  id: 'novo-teste',
  title: 'Título do Teste',
  description: 'Descrição do teste',
  category: 'personalidade',
  icon: 'IconName',
  color: 'from-color-500 to-color-600',
  questions: [
    {
      id: 1,
      text: 'Pergunta?',
      options: [
        { text: 'Opção 1', score: 10 },
        { text: 'Opção 2', score: 7 },
        // ...
      ]
    }
  ],
  trait: 'traito'
}
```

### Modificar Cores

Edite as classes Tailwind nos componentes para alterar o esquema de cores.

### Alterar Níveis

Modifique a função `calculateLevel` em `src/lib/utils.js` para ajustar o sistema de níveis.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔒 Privacidade

- Todos os dados são armazenados localmente no navegador (LocalStorage)
- Nenhuma informação pessoal é coletada ou enviada para servidores
- O ranking atual usa dados simulados para demonstração

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novos testes
- Melhorar a documentação
- Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT.

## 📞 Suporte

Para questões ou suporte, abra uma issue no repositório do GitHub.

---

Desenvolvido com ❤️ usando React, Vite e TailwindCSS
