import { useState } from "react";
import { createContext } from "react";

const Context = createContext()

export const MyContextProvider = ({children}) => {
  const[cantidad, setCantidad] = useState(0)

  const add = () =>{
    setCantidad(cantidad+1)
  }

  const remove = () =>{
    setCantidad(cantidad-1)
  }

  const getTotal = () => {
    return cantidad
  }

  return (
      <Context.Provider value={{remove, add, getTotal}}>
          {children}
      </Context.Provider>
  )
}

export default Context;