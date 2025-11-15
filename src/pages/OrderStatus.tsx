import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Check, Loader2 } from 'lucide-react';

const statusSteps = [
  { label: 'Pedido Recebido', time: '14:30' },
  { label: 'Em Preparo', time: '14:35' },
  { label: 'Pronto', time: '14:45' },
  { label: 'Entregue', time: '' }
];

export default function OrderStatus() {
  const navigate = useNavigate();
  const { currentOrder, updateOrderStatus } = useCart();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (!currentOrder) return;

    const interval = setInterval(() => {
      setCurrentStepIndex(prev => {
        if (prev < statusSteps.length - 1) {
          const newIndex = prev + 1;
          updateOrderStatus(statusSteps[newIndex].label);
          return newIndex;
        }
        return prev;
      });
    }, 5000); // Avança a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentOrder, updateOrderStatus]);

  if (!currentOrder) {
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
            <h1 className="text-2xl font-bold text-foreground">Status do Pedido</h1>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center p-8 max-w-lg mx-auto mt-20">
          <p className="text-muted-foreground text-center">
            Você não tem nenhum pedido ativo no momento
          </p>
          <Button onClick={() => navigate('/')} className="mt-6 bg-primary hover:bg-primary/90">
            Ver Cardápio
          </Button>
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
          <h1 className="text-2xl font-bold text-foreground">Pedido #{currentOrder.id}</h1>
        </div>
      </header>

      <main className="p-4 max-w-lg mx-auto space-y-6">
        {/* Order Info Card */}
        <Card className="p-4 shadow-md">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mesa:</span>
              <span className="font-bold">{currentOrder.mesa}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Horário:</span>
              <span className="font-bold">{currentOrder.horario}</span>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <p className="text-sm font-medium mb-2">Itens do pedido:</p>
              {currentOrder.itens.map((item, index) => (
                <div key={index} className="flex justify-between text-sm py-1">
                  <span>{item.quantity}x {item.nome}</span>
                  <span>R$ {(item.preco * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-primary">R$ {currentOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Status Timeline */}
        <Card className="p-6 shadow-md">
          <h2 className="text-lg font-bold mb-6">Status do Pedido</h2>
          <div className="space-y-6">
            {statusSteps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isActive = index === currentStepIndex;
              const isPending = index > currentStepIndex;

              return (
                <div key={step.label} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        isCompleted
                          ? 'bg-success border-success'
                          : isActive
                          ? 'bg-primary border-primary animate-pulse'
                          : 'bg-background border-muted'
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5 text-success-foreground" />
                      ) : isActive ? (
                        <Loader2 className="h-5 w-5 text-primary-foreground animate-spin" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-muted" />
                      )}
                    </div>
                    {index < statusSteps.length - 1 && (
                      <div
                        className={`w-0.5 h-12 ${
                          isCompleted ? 'bg-success' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <p
                      className={`font-medium ${
                        isCompleted || isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {step.label}
                    </p>
                    {(isCompleted || (isActive && step.time)) && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.time}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {currentStepIndex < statusSteps.length - 1 && (
            <div className="mt-6 p-3 bg-accent/10 rounded-lg">
              <p className="text-sm text-accent-foreground text-center">
                ⏱️ Tempo estimado: ~{(statusSteps.length - currentStepIndex - 1) * 5} minutos
              </p>
            </div>
          )}
        </Card>

        <Button 
          onClick={() => navigate('/')} 
          variant="outline"
          className="w-full"
        >
          Voltar ao Cardápio
        </Button>
      </main>
    </div>
  );
}
