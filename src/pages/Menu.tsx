import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems, categories } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ShoppingCart, Plus } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { addToCart, cartCount } = useCart();
  const navigate = useNavigate();

  const filteredItems = selectedCategory === 'Todos' 
    ? menuItems 
    : menuItems.filter(item => item.categoria === selectedCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart(item);
    toast.success(`${item.nome} adicionado ao carrinho!`, {
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background md:flex">
      {/* Sidebar - Menu de Categorias à Esquerda (Desktop) */}
      <aside className="hidden md:block w-64 bg-card border-r border-border fixed left-0 top-0 bottom-0 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-foreground mb-6">Cardápio</h1>

          {/* Carrinho Info */}
          <button
            onClick={() => navigate('/carrinho')}
            className="mb-8 p-4 bg-muted rounded-lg w-full hover:bg-muted/80 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Carrinho</span>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {cartCount > 0 && (
                  <Badge className="bg-primary text-primary-foreground">
                    {cartCount}
                  </Badge>
                )}
              </div>
            </div>
          </button>

          {/* Categorias */}
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Categorias
            </h2>
            <nav className="space-y-1">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal - Grid de Itens */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-8">
        {/* Header Mobile e Desktop */}
        <header className="sticky top-0 bg-card border-b border-border shadow-sm z-40">
          {/* Mobile Header */}
          <div className="md:hidden">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-xl font-bold text-foreground">Cardápio</h1>
              <button
                onClick={() => navigate('/carrinho')}
                className="relative p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ShoppingCart className="h-6 w-6 text-foreground" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                    {cartCount}
                  </Badge>
                )}
              </button>
            </div>

            {/* Categorias Mobile - Horizontal Scroll */}
            <div className="overflow-x-auto pb-3 px-4">
              <div className="flex gap-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block p-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCategory}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'itens'}
              </p>
            </div>
          </div>
        </header>

        {/* Menu Items Grid */}
        <div className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map(item => (
              <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                    {item.categoria}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.nome}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.descricao}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      R$ {item.preco.toFixed(2)}
                    </span>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
