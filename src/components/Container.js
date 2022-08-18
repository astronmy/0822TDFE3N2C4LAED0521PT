
import React, { useState } from 'react'
import { getRandomPokemon } from '../data/pokemones';
import styles from '../styles/container.module.css'
import Pokemon from './Pokemon'

const pokemonPortada = getRandomPokemon();

const Container = ({data , title}) => {
  const [portada, setPortada] = useState(pokemonPortada.avatar);

  const cambiarPortada = (pokeName, pokeImage) => {
    alert(pokeName)
    setPortada(pokeImage)
  }

  return (
    <>
      <h2>{title}</h2>
      <img className={styles.portada} src={portada} alt="imagen principal" />
      <div className={styles.container}>
        {
          data.map((pokemon) => <Pokemon key={(pokemon.id)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} actualizar={cambiarPortada} />)
        }
      </div>
    </>
  )
};

export default Container;

