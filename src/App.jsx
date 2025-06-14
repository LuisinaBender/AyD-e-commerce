import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Logo from './components/logo'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Logo/>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo='¡Tiempos de Renovación!'/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;



