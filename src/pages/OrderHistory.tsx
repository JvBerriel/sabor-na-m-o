import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ChevronDown, ChevronUp, RotateCcw, Receipt } from 'lucide-react';
import { toast } from 'sonner';

export default function OrderHistory() {
  const navigate = useNavigate();
  const { orderHistory } = useCart();
  const [expandedOrders, setExpandedOrders] = useState<number[]>([]);

  const toggleExpanded = (orderId: number) => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleRepeatOrder = (orderId: number) => {
    toast.success('Itens adicionados ao carrinho!');
    navigate('/carrinho');
  };

  if (orderHistory.length === 0) {
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
            <h1 className="text-2xl font-bold text-foreground">Histórico de Pedidos</h1>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center p-8 max-w-lg mx-auto mt-20">
          <Receipt className="h-24 w-24 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-center">
            Você ainda não fez nenhum pedido
          </p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-foreground">Histórico de Pedidos</h1>
        </div>
      </header>

      <main className="p-4 max-w-lg mx-auto space-y-4">
        {orderHistory.map(order => {
          const isExpanded = expandedOrders.includes(order.id);
          const orderDate = new Date(order.data);
          const formattedDate = orderDate.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });
          const formattedTime = orderDate.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Sao_Paulo'
          });

          return (
            <Card key={order.id} className="overflow-hidden shadow-md">
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{formattedDate} às {formattedTime}</p>
                    <p className="font-bold text-foreground">Pedido #{order.id}</p>
                    <p className="text-sm text-muted-foreground mt-1">Mesa: {order.mesa}</p>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">
                    {order.status}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">Itens:</p>
                  {isExpanded ? (
                    order.itens.map((item, index) => (
                      <p key={index} className="text-sm text-muted-foreground pl-2">
                        • {item}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {order.itens.length} {order.itens.length === 1 ? 'item' : 'itens'}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-lg font-bold text-primary">
                    R$ {order.total.toFixed(2)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(order.id)}
                  >
                    {isExpanded ? (
                      <>
                        Menos detalhes <ChevronUp className="h-4 w-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Ver detalhes <ChevronDown className="h-4 w-4 ml-1" />
                      </>
                    )}
                  </Button>
                </div>

                {isExpanded && (
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => handleRepeatOrder(order.id)}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Repetir Pedido
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </main>
    </div>
  );
}
