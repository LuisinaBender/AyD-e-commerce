import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import Logo from './components/logo';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import CheckoutHook from './components/CheckoutHook';
import ErrorPage from './components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Logo />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='¡Tiempos de Renovación!' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path='/checkout' element={<CheckoutHook />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;



