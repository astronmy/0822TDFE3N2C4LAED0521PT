import { Container, Grid, Text } from "@chakra-ui/react"
import { useContext } from "react"
import CartContext from '../context/CartContext'
import CartItem from "./Cartitem"


const Cart = () => {
  const { cart, getTotal, removeItem } = useContext(CartContext)

  return (
    <Container maxW='4xl' centerContent>
      <Text fontSize='1rem'>{`$${getTotal()}`}</Text>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        {cart.map((producto) => <CartItem key={producto.id} {...producto} onRemove={()=> removeItem(producto.id)} />)}
      </Grid>
    </Container>
  )
}
export default Cart