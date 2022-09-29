import { useState } from "react"
import { createContext } from "react"
import { createPreference } from "../services/Service"

const Context = createContext()

export const CartContextProvider = ( {children}) => {
  const [cart, setCart] = useState([])
  
  const addItem = (product, quantity) => {
      if(!isInCart(product.id)){
          const seleccion = {
            ...product,
            quantity
          }
          setCart([...cart, seleccion])
      }else{
         let aux = [...cart]
         aux.forEach(prod => {
            if(prod.id === product.id){
              prod.quantity += quantity
            }
         })

         setCart(aux)
      }
  }
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const getTotal = () => {
    let total = 0;
    cart.forEach(item =>{
        total+= item.price
    })
    return total;
  }

  const isInCart = (id) => {
      return cart.some( (item) => item.id === id)
  }

  const getQuantity = () => {
    return cart.length
  }

  const doCheckout = async() => {
    const response = await createPreference({items: cart})
    return response.global
  }


  return (
     <Context.Provider value={{addItem, getTotal, removeItem, cart, getQuantity, doCheckout}}>
        {children}
     </Context.Provider>
  )
}

export default Context