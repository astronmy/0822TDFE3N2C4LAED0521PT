
import React from 'react'
import Heroe from '../Heroe'
import './index.css'

export default class Container extends React.Component{
   constructor(props){
      super(props)
      console.log(props)

      this.hola = this.hola.bind(this)
   }

   hola(){
        alert("hola")
   }  

   render(){
    return (
        <div className="container">
          <h2>Bienvenidos</h2>
          <button onClick={this.hola}>Click Hola!</button>
          {
            this.props.heroes.map( (heroe) => <Heroe  name={heroe.name} origin={heroe.origin} /> )
          } 
        </div>
    )
   }
}