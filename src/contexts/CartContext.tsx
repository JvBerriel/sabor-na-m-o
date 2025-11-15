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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

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
    clearCart();
  };

  const updateOrderStatus = (status: string) => {
    if (currentOrder) {
      setCurrentOrder({ ...currentOrder, status });
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
      updateOrderStatus
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
