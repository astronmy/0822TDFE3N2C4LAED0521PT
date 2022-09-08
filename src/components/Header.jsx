import { NavLink, useMatch, useNavigate } from 'react-router-dom';
import styles from '../styles/header.module.css'

const Header = () => {
  const navigate = useNavigate()
  const isHome = useMatch("/")

  const backButton = () =>{
    navigate(-1)
  }
  return (
      <nav className={styles.header}>
          {!isHome && <button onClick={backButton}>back</button>}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/characters'>Characters</NavLink>
      </nav>
  )
}

export default Header;