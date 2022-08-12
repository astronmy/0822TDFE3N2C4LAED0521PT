import './App.css';
import { getPokemones } from "./data/pokemones";
import Container from './components/Container';

function App() {
  const pokemones = getPokemones()
  return (
      <Container data={pokemones} title="Tengo que atraparlos!"/>
  );
}

export default App;
