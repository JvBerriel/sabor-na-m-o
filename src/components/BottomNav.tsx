import { UtensilsCrossed, ShoppingCart, Clock, FileText } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

export const BottomNav = () => {
  const { cartCount } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        <NavLink
          to="/"
          className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          activeClassName="text-primary"
        >
          {({ isActive }) => (
            <>
              <UtensilsCrossed className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Cardápio
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/carrinho"
          className="flex flex-col items-center justify-center flex-1 h-full transition-colors relative"
          activeClassName="text-primary"
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <ShoppingCart className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                    {cartCount}
                  </Badge>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Carrinho
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/pedido"
          className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          activeClassName="text-primary"
        >
          {({ isActive }) => (
            <>
              <Clock className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Pedido
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/historico"
          className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          activeClassName="text-primary"
        >
          {({ isActive }) => (
            <>
              <FileText className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-xs mt-1 ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                Histórico
              </span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
