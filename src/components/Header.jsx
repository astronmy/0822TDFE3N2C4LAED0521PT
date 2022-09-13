import { useContext } from "react";
import Context from "../context/MyContext"


const Header = () => {
  const {getTotal} = useContext(Context)

  return (
      <header>
        {getTotal()}
      </header>
  )
}
export default Header;