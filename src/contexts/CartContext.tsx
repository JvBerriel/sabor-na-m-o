import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';

interface CartItem extends MenuItem {
  quantity: number;
}

interface Order {
  id: number;
  mesa: number;
  status: string;
  itens: CartItem[];
  total: number;
  horario: string;
}

interface OrderHistoryItem {
  id: number;
  data: string;
  itens: string[];
  total: number;
  status: string;
  mesa: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  currentOrder: Order | null;
  createOrder: (mesa: number) => void;
  updateOrderStatus: (status: string) => void;
  completeOrder: () => void;
  orderHistory: OrderHistoryItem[];
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentOrder, setCurrentOrder] = useState<Order | null>(() => {
    const saved = localStorage.getItem('currentOrder');
    return saved ? JSON.parse(saved) : null;
  });

  const [orderHistory, setOrderHistory] = useState<OrderHistoryItem[]>(() => {
    const saved = localStorage.getItem('orderHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(() => {
    const saved = localStorage.getItem('currentStepIndex');
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (currentOrder) {
      localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
    } else {
      localStorage.removeItem('currentOrder');
    }
  }, [currentOrder]);

  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [orderHistory]);

  useEffect(() => {
    localStorage.setItem('currentStepIndex', JSON.stringify(currentStepIndex));
  }, [currentStepIndex]);

  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.preco * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const createOrder = (mesa: number) => {
    const order: Order = {
      id: Date.now(),
      mesa,
      status: 'Pedido Recebido',
      itens: cartItems,
      total: cartTotal * 1.1, // com taxa de serviço
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    setCurrentOrder(order);
    setCurrentStepIndex(0); // Resetar cronômetro ao criar novo pedido
    clearCart();
  };

  const updateOrderStatus = (status: string) => {
    if (currentOrder) {
      setCurrentOrder({ ...currentOrder, status });
    }
  };

  const completeOrder = () => {
    if (currentOrder) {
      // Criar item de histórico
      const historyItem: OrderHistoryItem = {
        id: currentOrder.id,
        data: new Date().toISOString(),
        itens: currentOrder.itens.map(item => `${item.quantity}x ${item.nome}`),
        total: currentOrder.total,
        status: 'Entregue',
        mesa: currentOrder.mesa
      };

      // Adicionar ao histórico
      setOrderHistory(prev => [historyItem, ...prev]);

      // Limpar pedido atual
      setCurrentOrder(null);
      setCurrentStepIndex(0);
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
      currentOrder,
      createOrder,
      updateOrderStatus,
      completeOrder,
      orderHistory,
      currentStepIndex,
      setCurrentStepIndex
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
