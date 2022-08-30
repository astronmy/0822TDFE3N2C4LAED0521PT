import { useState } from 'react';
import './App.css';
import Hijo from './components/Hijo';

function App() {
  const [contador, setContador] = useState(0)
  const incrementar = () => {
      setContador(contador+1)
  }
  return (
    <>  
        <h2>{contador}</h2>
        <Hijo funcion={incrementar} />
    </>
  )
}

export default App;
