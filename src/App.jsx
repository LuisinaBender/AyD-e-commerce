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
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';

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
        <a
          href="https://wa.me/5493498521222?text=Hola%2C%20quiero%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          style={{
              position: 'fixed',
              bottom: '56px',
              right: '20px',
              width: '50px',
              height: '50px',
              backgroundColor: '#25D366',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              zIndex: 1000,
              textDecoration: 'none',
            
          }}
          aria-label="WhatsApp"
          >
          <FaWhatsapp />
          </a>
          <a
          href="https://www.instagram.com/yeso_arte2025/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
              position: 'fixed',
              bottom: '120px', 
              right: '20px',
              backgroundColor: '#E1306C',
              color: 'white',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '24px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              zIndex: 1000,
              textDecoration: 'none',
            }}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;



