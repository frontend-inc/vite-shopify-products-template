import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from '@/components/Home';
import CartDrawer from './components/CartDrawer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="w-full flex flex-col min-h-[calc(100vh-80px)]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      <CartDrawer />
      </CartProvider>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;