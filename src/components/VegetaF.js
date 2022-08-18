import {useState} from 'react'
import styles from '../styles/container.module.css'

const VegetaF = () => {
  const imageUp   = "https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
  const imageDown = "https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";
  const [contador, setContador] = useState(1)
  const [image, setImage] = useState(imageUp)
  const [flexion, setFlexion] = useState(0)

  const incrementar = () =>{
    setContador(contador+1)
    if(contador %2 === 0){
      setImage(imageUp)
      setFlexion(flexion+1)
    }else{
      setImage(imageDown)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={incrementar} className={styles.btn}>Push Up!</button>
      <img src={image} alt='vegeta' />
      <h2>{flexion}</h2>
    </div>

  )

};
export default VegetaF;