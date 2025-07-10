import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Logo from './components/logo'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './components/CartContainer';
import CheckoutHook from './components/CheckoutHook';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Logo/>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='¡Tiempos de Renovación!'/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path='/checkout' element={<CheckoutHook/>} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;



