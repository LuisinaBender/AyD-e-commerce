import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Logo from './components/logo'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from './components/CartContainer';
import CartContainer from './components/CartContainer';



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
          <Route path='/cart' element={CartContainer} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;



