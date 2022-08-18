import React from 'react'
import styles from '../styles/pokemon.module.css'

const Pokemon = ({ name, avatar:imagenPokemon, type, actualizar }) => {

  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <figure>
        <img src={imagenPokemon} className={styles.card__image} alt={name} />
      </figure>
      <h4 className={styles.title}>{name}</h4>
      <button onClick={() => actualizar(name, imagenPokemon)} className={styles.btn}> Yo te elijo!!</button>
    </div>
  )
}
export default Pokemon;