import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartTotal, createOrder } = useCart();
  const [mesa, setMesa] = useState('');

  const taxaServico = cartTotal * 0.1;
  const total = cartTotal + taxaServico;

  const handleConfirmOrder = () => {
    if (!mesa || parseInt(mesa) <= 0) {
      toast.error('Por favor, informe o número da mesa');
      return;
    }

    createOrder(parseInt(mesa));
    toast.success('Pedido confirmado com sucesso!');
    navigate('/pedido');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="sticky top-0 bg-card border-b border-border shadow-sm z-40">
          <div className="flex items-center gap-4 p-4 max-w-lg mx-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Meu Carrinho</h1>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center p-8 max-w-lg mx-auto mt-20">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Seu carrinho está vazio</h2>
          <p className="text-muted-foreground text-center mb-6">
            Adicione itens do cardápio para fazer seu pedido
          </p>
          <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90">
            Ver Cardápio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-48">
      <header className="sticky top-0 bg-card border-b border-border shadow-sm z-40">
        <div className="flex items-center gap-4 p-4 max-w-lg mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Meu Carrinho</h1>
        </div>
      </header>

      <main className="p-4 max-w-lg mx-auto space-y-4">
        {cartItems.map(item => (
          <Card key={item.id} className="p-4 shadow-md">
            <div className="flex gap-4">
              <img 
                src={item.imagem} 
                alt={item.nome}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold text-foreground">{item.nome}</h3>
                <p className="text-sm text-primary font-semibold">
                  R$ {item.preco.toFixed(2)}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-medium w-8 text-center">{item.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 ml-auto text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </main>

      {/* Fixed Footer */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border shadow-lg">
        <div className="p-4 max-w-lg mx-auto space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="font-medium">R$ {cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Taxa de serviço (10%):</span>
            <span className="font-medium">R$ {taxaServico.toFixed(2)}</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex justify-between mb-3">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold text-primary">R$ {total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mesa" className="text-sm font-medium">
                Número da Mesa *
              </Label>
              <Input
                id="mesa"
                type="number"
                placeholder="Ex: 5"
                value={mesa}
                onChange={(e) => setMesa(e.target.value)}
                className="border-2"
              />
            </div>
            <Button 
              onClick={handleConfirmOrder}
              className="w-full mt-3 h-12 bg-success hover:bg-success/90 text-success-foreground"
            >
              Confirmar Pedido
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
