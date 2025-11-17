# 🍽️ Sabor na Mão - Restaurante App

## 📋 Sobre o Projeto

Aplicativo web progressivo (PWA) completo para pedidos de restaurante, permitindo que clientes naveguem pelo cardápio, adicionem itens ao carrinho, façam pedidos e acompanhem o status em tempo real. Desenvolvido com foco em experiência mobile-first, interface intuitiva e persistência de dados.

## ✨ Funcionalidades Principais

### 🍕 Cardápio Digital
- Visualização de 40 pratos organizados por categorias
- Categorias: Entradas, Pratos Principais, Sobremesas e Bebidas
- Imagens de alta qualidade para cada item
- Preços e descrições detalhadas

### 🛒 Carrinho de Compras Inteligente
- Adicione, remova e ajuste quantidades dos itens
- Cálculo automático de subtotal e taxa de serviço (10%)
- **Persistência automática** no localStorage
- Carrinho mantido mesmo após fechar o navegador

### 📱 Gestão de Pedidos em Tempo Real
- Confirmação de pedidos com número da mesa
- **Cronômetro com persistência** - progresso mantido ao navegar entre telas
- Timeline animado mostrando status atual
- Horários calculados dinamicamente no **fuso de Brasília** (America/Sao_Paulo)
- Atualização automática de status a cada 5 segundos
- Status "Entregue" fica **verde (✓)** quando completado

### 📊 Histórico de Pedidos Funcional
- **Sistema de histórico real** (não utiliza dados mock)
- Pedidos finalizados são automaticamente salvos
- Exibe informações completas:
  - Data e horário do pedido
  - Número da mesa
  - Lista de itens
  - Valor total
- Função "Repetir Pedido" para facilitar novos pedidos
- Persistência no localStorage

### 💾 Sistema de Persistência Completo
- **Carrinho**: Salvo automaticamente
- **Pedido atual**: Mantido ao navegar entre telas
- **Progresso do cronômetro**: Não reseta ao sair da tela
- **Histórico de pedidos**: Todos os pedidos finalizados salvos
- Dados preservados mesmo após recarregar a página

### 📱 PWA (Progressive Web App)
- Instalável como aplicativo nativo
- Funciona offline
- Ícones e splash screens customizados
- Experiência de app nativo

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultrarrápido

### Estilização
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/ui** - Componentes UI acessíveis e customizáveis (Radix UI)
- **Lucide React** - Biblioteca de ícones moderna

### Roteamento e Estado
- **React Router DOM v6** - Navegação SPA
- **Context API** - Gerenciamento de estado global
- **localStorage** - Persistência de dados

### Utilidades
- **Sonner** - Toast notifications elegantes
- **date-fns** - Manipulação de datas
- **TanStack React Query** - Configurado (pronto para integrações futuras)

### PWA
- **vite-plugin-pwa** - Configuração de Service Worker e manifesto

## 📁 Estrutura do Projeto

```
sabor-na-m-o/
├── public/
│   ├── pwa-*.png           # Ícones PWA (diversos tamanhos)
│   └── manifest.webmanifest
├── src/
│   ├── assets/             # Imagens dos pratos (40 imagens)
│   ├── components/
│   │   ├── ui/            # 50+ componentes Shadcn/ui
│   │   ├── BottomNav.tsx  # Navegação inferior
│   │   └── NavLink.tsx    # Link ativo
│   ├── contexts/
│   │   └── CartContext.tsx # Gerenciamento global de estado
│   ├── data/
│   │   └── mockData.ts    # Dados do cardápio
│   ├── hooks/             # Custom hooks
│   ├── lib/
│   │   └── utils.ts       # Funções utilitárias
│   ├── pages/
│   │   ├── Menu.tsx       # Cardápio principal
│   │   ├── Cart.tsx       # Carrinho de compras
│   │   ├── OrderStatus.tsx # Acompanhamento do pedido
│   │   ├── OrderHistory.tsx # Histórico
│   │   └── NotFound.tsx   # Página 404
│   ├── types/
│   │   └── menu.ts        # Interfaces TypeScript
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **bun**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/JvBerriel/sabor-na-m-o.git

# Entre no diretório
cd sabor-na-m-o

# Instale as dependências
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para produção

```bash
# Criar build otimizado
npm run build

# Preview do build
npm run preview
```

### Lint

```bash
npm run lint
```

## 🎨 Design System

### Paleta de Cores

O projeto utiliza um design system baseado em tokens semânticos HSL:

```css
--primary: 17 88% 40%        /* Laranja vibrante */
--secondary: 24 90% 50%      /* Laranja secundário */
--success: 142 76% 36%       /* Verde para sucesso */
--destructive: 0 84% 60%     /* Vermelho para ações destrutivas */
--muted: 210 40% 96%         /* Cinza claro */
--background: 0 0% 100%      /* Branco */
--foreground: 222 47% 11%    /* Texto principal */
```

### Tipografia

- Font: `system-ui` (fonte do sistema)
- Escala modular com Tailwind

### Componentes

Mais de 50 componentes Shadcn/ui incluídos:
- Buttons, Cards, Badges
- Inputs, Selects, Dialogs
- Tooltips, Toasts
- E muito mais...

## 📱 Rotas da Aplicação

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Menu.tsx | Cardápio principal com todos os pratos |
| `/carrinho` | Cart.tsx | Carrinho de compras e confirmação |
| `/pedido` | OrderStatus.tsx | Acompanhamento em tempo real |
| `/historico` | OrderHistory.tsx | Histórico de pedidos anteriores |
| `*` | NotFound.tsx | Página 404 |

## 🔄 Fluxo Completo do Pedido

### 1. Navegação no Cardápio
- Cliente explora as 4 categorias de pratos
- Visualiza imagens, descrições e preços
- Adiciona itens ao carrinho com botão "Adicionar"

### 2. Gerenciamento do Carrinho
- Ajusta quantidades com botões +/-
- Remove itens indesejados
- Visualiza subtotal e taxa de serviço (10%)
- Informa número da mesa
- Confirma o pedido

### 3. Acompanhamento em Tempo Real
Pedido passa por 4 estágios automáticos:

| Status | Tempo | Descrição |
|--------|-------|-----------|
| 🔔 Pedido Recebido | 0min | Pedido confirmado |
| 👨‍🍳 Em Preparo | +5min | Cozinha preparando |
| ✅ Pronto | +15min | Pedido finalizado |
| 🎉 Entregue | +20min | Entregue ao cliente |

**Funcionalidades técnicas:**
- Cronômetro avança a cada 5 segundos
- Progresso salvo no localStorage
- Não reseta ao navegar entre telas
- Horários calculados em tempo real (horário de Brasília)
- Status "Entregue" fica verde (✓) ao completar
- Após 2 segundos no status "Entregue", pedido vai automaticamente para o histórico

### 4. Histórico de Pedidos
- Pedido automaticamente salvo ao finalizar
- Exibe data, horário e mesa
- Lista completa de itens
- Valor total pago
- Botão "Repetir Pedido" para facilitar novos pedidos

## 🔐 Gerenciamento de Estado (CartContext)

O `CartContext` é o coração da aplicação, gerenciando:

### Estados
```typescript
- cartItems: CartItem[]           // Itens do carrinho
- currentOrder: Order | null      // Pedido atual
- orderHistory: OrderHistoryItem[] // Histórico de pedidos
- currentStepIndex: number        // Progresso do cronômetro
```

### Funções
```typescript
- addToCart(item)           // Adicionar item ao carrinho
- removeFromCart(itemId)    // Remover item
- updateQuantity(id, qty)   // Atualizar quantidade
- clearCart()               // Limpar carrinho
- createOrder(mesa)         // Criar novo pedido
- updateOrderStatus(status) // Atualizar status do pedido
- completeOrder()           // Finalizar e salvar no histórico
- setCurrentStepIndex(idx)  // Atualizar progresso do cronômetro
```

### Computações
```typescript
- cartTotal: number  // Total dos itens (sem taxa)
- cartCount: number  // Quantidade total de itens
```

### Persistência
Tudo salvo automaticamente no localStorage:
- `cart` → Itens do carrinho
- `currentOrder` → Pedido ativo
- `orderHistory` → Histórico completo
- `currentStepIndex` → Progresso do cronômetro

## 📊 Dados do Cardápio

### Estrutura dos Itens
```typescript
interface MenuItem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: 'Entradas' | 'Pratos Principais' | 'Sobremesas' | 'Bebidas';
  imagem: string;
}
```

### Distribuição
- **10 Entradas** - R$ 12,00 a R$ 22,00
- **10 Pratos Principais** - R$ 28,00 a R$ 45,00
- **10 Sobremesas** - R$ 8,00 a R$ 18,00
- **10 Bebidas** - R$ 5,00 a R$ 15,00

**Total: 40 itens** com imagens reais de alta qualidade

## 🔧 Configurações Importantes

### Vite Config
```typescript
- PWA configurado com workbox
- Manifesto automático
- Ícones para todas as plataformas
```

### Tailwind Config
```typescript
- Theme customizado
- Container responsivo
- Animações personalizadas
```

### TypeScript Config
```typescript
- Strict mode habilitado
- Path aliases (@/*)
- Target ES2020
```

## 🌐 PWA - Progressive Web App

### Características
- ✅ Instalável no dispositivo
- ✅ Funciona offline (Service Worker)
- ✅ Ícones otimizados (192px, 512px, maskable)
- ✅ Splash screens
- ✅ Theme color configurado

### Instalação
1. Acesse o app no navegador
2. Clique em "Instalar" no menu do navegador
3. App será instalado como aplicativo nativo

## 🚀 Próximas Melhorias Sugeridas

- [ ] Integração com backend/API real
- [ ] Autenticação de usuários
- [ ] Notificações push
- [ ] Sistema de pagamento integrado
- [ ] Avaliações e comentários nos pratos
- [ ] Modo escuro (Dark mode)
- [ ] Internacionalização (i18n)
- [ ] Analytics de pedidos

## 📄 Licença

Este projeto foi desenvolvido como demonstração de um aplicativo de pedidos para restaurante.

---

**Desenvolvido com ❤️ usando React + TypeScript + Vite**
