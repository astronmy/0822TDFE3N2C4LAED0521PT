import { Link } from "react-router-dom";



const Navbar = ({title:titulo}) => {

  return (
    <nav>
        <Link to="/">{titulo}</Link>
        <div>
            <Link to="/products">Productos</Link>
        </div>
    </nav>
  )
}
export default Navbar;