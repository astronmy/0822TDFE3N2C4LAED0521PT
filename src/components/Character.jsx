import { useEffect } from 'react';
import styles from '../styles/character.module.css'

const Character = ( { name, image}) =>{

  useEffect( () => {

    return () => {
        console.log('se desmonto '+name)
    }

  }, [])

  return (
      <div className={styles.character}>
          <img src={image} alt={name} />
          <h3>{name}</h3>
      </div>
  )
}
export default Character;