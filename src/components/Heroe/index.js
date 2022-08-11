import React from 'react'
import './index.css'

export default class Heroe extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
        <>
          <h4>{this.props.name}</h4>
          <small>{this.props.origin}</small>
        </>
    )
  }
}