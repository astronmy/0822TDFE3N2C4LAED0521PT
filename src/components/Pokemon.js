import React from 'react'
import styles from '../styles/pokemon.module.css'


export default class Pokemon extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount(){
    console.log("se desmoto el pokemon")
  }

  render() {
    const { name, avatar, type, actualizar } = this.props

    return (
      <div className={`${styles.card} ${styles[type]}`}>
        <figure>
          <img src={avatar} className={styles.card__image} alt={name} />
        </figure>
        <h4 className={styles.title}>{name}</h4>
        <button onClick={() => actualizar(name, avatar)} className={styles.btn}> Yo te elijo!!</button>
      </div>
    )
  }

}