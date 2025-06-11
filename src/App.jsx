import './App.css';
import ButtonMultiuso from "./examples/ButtonMultiuso";
import Contador from './examples/Contador';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CarWidget from './components/CarWidget';
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


  
  /*const styles = {
  backgroundColor:'yellow',
  padding:'1rem',
  color:'black',
  fontWeight:'bold'
  }
  const saludar = () =>{
  alert('Hola!')
  }
  return (
    <>
      <Contador/>
      <ButtonMultiuso texto={'Mi boton alerta'} styles={styles} handler={saludar}/>
      <ButtonMultiuso texto='Otro boton' cssStyle='mi-boton'/>
    </>
  )*/


