import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getPokemonesByType, getRandomPokemon } from '../data/pokemones';
import styles from '../styles/container.module.css'
import Pokemon from './Pokemon';

const pokemonPortada = getRandomPokemon();

const ContainerFuncion = ({ title }) => {

  const [portada, setPortada] = useState(pokemonPortada.avatar)
  const [name, setName] = useState(pokemonPortada.name)
  const [pokemones, setPokemones] = useState([])
  const [type, setType] = useState('rock')

  useEffect( () =>{
    setPokemones(getPokemonesByType(type))
  }, [type])

  const cambiarPortada = (name, image) => {
    setPortada(image)
    setName(name)
  }

  const cambiarTipo = (tipo) => {
    setType(tipo)
  }

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.portada} src={portada} alt="imagen principal" />
      <h4 className={styles.subtitle}>
        Un <span className={styles.wild}>{name}</span> salvaje a aparecido
      </h4>
      <div className={styles.buttonbar}>
        <button className={`${styles.btnFilter} ${styles.fire}`} onClick={() => cambiarTipo('fire')} >F</button>
        <button className={`${styles.btnFilter} ${styles.water}`} onClick={() => cambiarTipo('water')} >W</button>
        <button className={`${styles.btnFilter} ${styles.rock}`} onClick={() => cambiarTipo('rock')}>R</button>
      </div>
      <div className={styles.container}>
        {
          pokemones.map((pokemon) => <Pokemon key={(pokemon.id)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} actualizar={cambiarPortada} />)
        }
      </div>
    </>
  )

}
export default ContainerFuncion;