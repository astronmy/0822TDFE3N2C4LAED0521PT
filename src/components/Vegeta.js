import React from 'react';
import styles from '../styles/container.module.css'

class Vegeta extends React.Component {
  imageUp   = "https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
  imageDown = "https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";

  constructor(){
    super();

    this.state = {
       contador: 1,
       image: this.imageUp,
       flexion: 0
    }

  }

  incrementar = () =>{
    this.setState(
      {
        contador: this.state.contador+1,
        image: (this.state.contador %2 === 0 ? this.imageUp : this.imageDown),
        flexion: (this.state.contador %2 === 0 ? this.state.flexion+1 : this.state.flexion)
      }
    )
  }

  render(){
    return (
        <div className={styles.container}>
            <button onClick={this.incrementar} className={styles.btn}>Push Up!</button>
            <img src={this.state.image} alt='vegeta' />
            <h2>{this.state.flexion}</h2>
        </div>
    )
  }
};
export default Vegeta;