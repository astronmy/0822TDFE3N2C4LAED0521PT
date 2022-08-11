
import React from 'react'
import HeroeF from '../HeroeF';
import './index.css'

const ContainerF = ( {heroes} ) => {

  return (
    <div className="container">
    <h2>Bienvenidos</h2>
    {
      heroes.map( (heroe) => <HeroeF  name={heroe.name} origin={heroe.origin} /> )
    } 
  </div>
  )
};

export default ContainerF;

