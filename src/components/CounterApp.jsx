import { useContext, useState } from "react";
import Context from "../context/MyContext";


const CounterApp = ({quantity}) =>{
  const[stock, setStock] = useState(quantity)
  const {add, remove} = useContext(Context)

  const disminuir = () =>{
      setStock(stock-1)
      add()
  }
  const aumentar = () =>{
    setStock(stock+1)
    remove()
  }

  return (
      <>
          <button onClick={aumentar}>-</button>
          {quantity}
          <button onClick={disminuir}>+</button>
      </>
  )

}
export default CounterApp;