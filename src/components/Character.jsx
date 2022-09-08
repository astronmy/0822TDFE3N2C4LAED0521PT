import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/character.module.css'

const Character = ( { name, image, id}) =>{
  const navigate = useNavigate();

  const moreInfo = () =>{
      navigate(`character/${id}`, {state: {image, name}})
  }

  return (
      <div className={styles.character}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <button onClick={moreInfo}>Mas Info</button>
          <Link className={styles.link} to={`character/${id}`}>Detalle</Link>
      </div>
  )
}
export default Character;