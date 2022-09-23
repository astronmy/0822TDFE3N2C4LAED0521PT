import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Navbar = ({title:titulo}) => {

  return (
    <nav>
        <Link to="/">{titulo}</Link>
        <Container display='flex' justifyContent='space-evenly'>
            <Link to="/products">Productos</Link>
            <Link to="/cart">Carrito</Link>
        </Container>
    </nav>
  )
}
export default Navbar;