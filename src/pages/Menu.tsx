import { useState } from 'react';
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
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-card border-b border-border shadow-sm z-40">
        <div className="flex items-center justify-between p-4 max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-foreground">Cardápio</h1>
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-foreground" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                {cartCount}
              </Badge>
            )}
          </div>
        </div>

        {/* Category Filter */}
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
      </header>

      {/* Menu Items Grid */}
      <main className="p-4 max-w-lg mx-auto space-y-4">
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
      </main>
    </div>
  );
}
