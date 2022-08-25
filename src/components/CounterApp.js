import { useState } from 'react'
import styles from '../styles/container.module.css'
const CounterApp = ({stock}) =>{
  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    if(counter < stock){
      setCounter(counter+1)
    }
  }
  const handleSubstract = () => {
      setCounter(counter-1)
  }

  return (
    <div className={styles.container}>
      <h2>Counter App</h2>
      <h2>{counter}</h2>
      <button onClick={handleAdd} >+1</button>
      {counter > 0 && <button onClick={handleSubstract} >-1</button>} 

     {/*  <button onClick={() => setCounter(counter+1)} >++1</button>
      {counter > 0 && <button onClick={() => setCounter(counter-1)} >--1</button>}  */}
      
    </div>
  )
}
export default CounterApp;