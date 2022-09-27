import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";



const Navbar = ({title:titulo}) => {

  return (
    <nav>
        <Link to="/">{titulo}</Link>
        <Container display='flex' justifyContent='space-evenly'>
            <Link to="/products">Productos</Link>
            <CartWidget />
        </Container>
    </nav>
  )
}
export default Navbar;