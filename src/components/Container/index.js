
import React from 'react'
import Pokemon from '../Pokemon';
import './index.css'

const Container = ({data , title}) => {

  return (
    <>
      <h2>{title}</h2>
      <div className="container">
        {
          data.map((pokemon) => <Pokemon key={(pokemon)} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} />)
        }
      </div>
    </>
  )
};

export default Container;

