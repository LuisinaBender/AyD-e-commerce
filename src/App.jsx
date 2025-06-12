import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/logo'; 
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <Logo />
      <ItemListContainer saludo='Bienvenidos a tu solucion online'/>
      <ItemCount stock ={10}/>

      
    </>
  );
}

export default App;



