import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { BottomNav } from "@/components/BottomNav";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import OrderStatus from "./pages/OrderStatus";
import OrderHistory from "./pages/OrderHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/pedido" element={<OrderStatus />} />
              <Route path="/historico" element={<OrderHistory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
          </div>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
