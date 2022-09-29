import { Button, Container, Grid, Text } from "@chakra-ui/react"
import { useContext } from "react"
import CartContext from '../context/CartContext'
import CartItem from "./Cartitem"

const Cart = () => {
  const { cart, getTotal, removeItem,  doCheckout} = useContext(CartContext)
  
  const onCheckout = async () => {
    const preferenceId = await doCheckout()
    const mp = new window.MercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY, {
      locale: 'es-AR'
    });
    mp.checkout({
      preference: {
        id: preferenceId
      },
      render: {
        container: '.cho-container',
        label: 'Pagar con Mercado Pago',
      }
    });
  }

  return (
    <Container maxW='4xl' centerContent>
      <Text fontSize='1rem'>{`$${getTotal()}`}</Text>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        {cart.map((producto) => <CartItem key={producto.id} {...producto} onRemove={() => removeItem(producto.id)} />)}
      </Grid>
      <Button colorScheme="green" onClick={onCheckout}>Checkout</Button>
      <div className="cho-container"></div>
    </Container>
  )
}
export default Cart