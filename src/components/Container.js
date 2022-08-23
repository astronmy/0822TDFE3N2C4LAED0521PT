
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { getPokemonesByType, getRandomPokemon } from '../data/pokemones';
import styles from '../styles/container.module.css'
import Pokemon from './Pokemon'

const pokemonPortada = getRandomPokemon();

export default class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      portada: pokemonPortada.avatar,
      name: pokemonPortada.name,
      pokemones: [],
      type: 'rock'
    }
  }

  cambiarPortada = (name, image) => {
    this.setState({
      portada: image,
      name
    });

  }

  cambiarTipo = () => {
    this.setState({
      type: 'fire'
    }) 
  }

  getData = () => {
  
    this.setState({
      pokemones: getPokemonesByType(this.state.type)
    }) 
  }

  componentDidMount(){
    console.log("se monto el container")
    this.getData();
  }

  componentDidUpdate(prevProps, prevState){
    console.log("el componente se actualizo")
    console.log("estado actual type ", this.state.type, "estado anterior ", prevState.type)
    if(this.state.type !== prevState.type){
      this.getData();
    }
  }


  render() {
    return (
      <>
        <h2 className={styles.title}>{this.props.title}</h2>
        <img className={styles.portada} src={this.state.portada} alt="imagen principal" />
        <h4 className={styles.subtitle}>
            Un <span className={styles.wild}>{this.state.name}</span> salvaje a aparecido
        </h4>
        <button onClick={this.cambiarTipo} >Cambiar a Fuego</button>
        <div className={styles.container}>
          {
            this.state.pokemones.map((pokemon) => <Pokemon key={(pokemon.id)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} actualizar={this.cambiarPortada} />)
          }
        </div>
      </>
    )
  }
};