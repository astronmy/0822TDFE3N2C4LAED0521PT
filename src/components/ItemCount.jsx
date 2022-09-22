import { useState } from "react";


const ItemCount = ({stock, initial = 0, onAddItem}) => {
    const[count, setCount] = useState(initial)
    
    const increment = () =>{
      if(stock > count){
        setCount(count+1)
      }
    }
    const decrease = () => {
      if(count > 0){
        setCount(count-1)
      }
    }

    if(stock === 0){
      return <h5>Sin Stock</h5>
    }

    return (
      <>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={() => onAddItem(count)}>Agregar al carrito</button>
      </>
    )
}

export default ItemCount;