import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/header.module.css'

const Header = ( {authenticated} ) => {
  const navigate = useNavigate()
  const excludePaths = ['/', '/characters', '/login'];
  const {pathname:currentPath}  = useLocation()

  const backButton = () =>{
    navigate(-1)
  }
  return (
      <nav className={styles.header}>
          {(!excludePaths.includes(currentPath)) && <button onClick={backButton}>back</button>}
          {
            authenticated ? 
              <>
                 <NavLink to='/characters'>Characters</NavLink>
              </>
            :
            <NavLink to='/login'>Login</NavLink>
          }
         
      </nav>
  )
}

export default Header;