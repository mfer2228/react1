import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemlistcontainer';

function App() {
  return (
   <>
    <Navbar />

    <ItemListContainer epale="Bienvenido a dónde tú no sabes qué somos, ni nosotros sabemos qué vendemos" />
    </> 
  );
}

export default App;
