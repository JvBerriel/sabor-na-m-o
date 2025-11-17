# 🍽️ Restaurante App

## 📋 Sobre o Projeto

Aplicativo web progressivo (PWA) para pedidos de restaurante, permitindo que clientes naveguem pelo cardápio, adicionem itens ao carrinho, façam pedidos e acompanhem o status em tempo real. Desenvolvido com foco em experiência mobile-first e interface intuitiva.

## ✨ Funcionalidades

- **Cardápio Digital**: Visualização de pratos organizados por categorias (Entradas, Pratos Principais, Sobremesas e Bebidas)
- **Carrinho de Compras**: Adicione, remova e ajuste quantidades dos itens
- **Gestão de Pedidos**: Confirme pedidos informando o número da mesa
- **Acompanhamento em Tempo Real**: Visualize o status do pedido com timeline animado
- **Histórico de Pedidos**: Consulte pedidos anteriores e repita facilmente
- **Persistência Local**: Carrinho salvo automaticamente no localStorage
- **Design Responsivo**: Interface otimizada para dispositivos móveis e desktop
- **PWA Ready**: Instalável como aplicativo nativo no dispositivo

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navegação entre páginas
- **Context API** - Gerenciamento de estado global
- **Shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones
- **Sonner** - Toast notifications

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens dos pratos (40 imagens)
├── components/      # Componentes reutilizáveis
│   ├── ui/         # Componentes base (Shadcn/ui)
│   ├── BottomNav.tsx
│   └── NavLink.tsx
├── contexts/        # Contextos React
│   └── CartContext.tsx
├── data/           # Dados mockados
│   └── mockData.ts
├── hooks/          # Custom hooks
├── lib/            # Utilitários
├── pages/          # Páginas da aplicação
│   ├── Menu.tsx
│   ├── Cart.tsx
│   ├── OrderStatus.tsx
│   ├── OrderHistory.tsx
│   └── NotFound.tsx
├── types/          # Definições TypeScript
│   └── menu.ts
└── App.tsx         # Componente raiz
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou bun

### Instalação

⚠️ **IMPORTANTE**: Este projeto precisa de um arquivo `package-lock.json` na raiz. Execute primeiro:

```bash
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

## 🎨 Design System

O projeto utiliza um design system baseado em tokens semânticos definidos em:
- `src/index.css` - Variáveis CSS customizadas
- `tailwind.config.ts` - Configuração do Tailwind

Cores principais:
- Primary: #FF6B35 (Laranja vibrante)
- Background: #F7F7F7 (Cinza claro)

## 📱 Rotas

- `/` - Página do cardápio
- `/carrinho` - Página do carrinho de compras
- `/pedido` - Acompanhamento do pedido atual
- `/historico` - Histórico de pedidos anteriores

## 🔄 Fluxo de Pedido

1. Cliente navega pelo cardápio e adiciona itens ao carrinho
2. Acessa o carrinho e confirma o pedido informando o número da mesa
3. Pedido é criado com taxa de serviço de 10%
4. Status do pedido é atualizado automaticamente:
   - Pedido Recebido
   - Em Preparo
   - Saiu para Entrega
   - Entregue

## 📊 Dados do Cardápio

O cardápio contém 40 itens divididos em:
- 10 Entradas
- 10 Pratos Principais
- 10 Sobremesas
- 10 Bebidas

Cada item possui:
- Nome
- Descrição
- Preço
- Categoria
- Imagem

## 🔐 Estado Global

O `CartContext` gerencia:
- Itens do carrinho
- Quantidades
- Total do carrinho
- Pedido atual
- Status do pedido

## 📄 Licença

Este projeto foi desenvolvido como demonstração de um aplicativo de pedidos para restaurante.
