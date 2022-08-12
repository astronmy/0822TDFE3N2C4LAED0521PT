import React from 'react'
import './index.css'

const Pokemon = ({ name, avatar, type }) => {

  return (
    <div className={'card ' + type}>
      <figure>
        <img src={avatar} className="card__image" />
      </figure>
      <h4 className='card__title'>{name}</h4>
    </div>
  )
}
export default Pokemon;