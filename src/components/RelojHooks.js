import { useEffect, useState } from "react";
import Reloj from "./Reloj";


const RelojHooks = () => {
  const [hour, setHour] = useState(null)
  const [visible, setVisible] = useState(null)

  useEffect( () => {
      console.log("RH montado")
  }, [])
  

  useEffect( () => {
    let temporizador;
    if(visible){
      temporizador = setInterval( () => {
        setHour(new Date().toLocaleTimeString());
      }, 1000)
    }else{
      clearInterval(temporizador)
    }

}, [visible])


  return (
    <>
      <h2>Reloj Hooks</h2>
      {visible && <Reloj hora={hour} />}
      <button onClick={() => setVisible(true)} >Iniciar</button>
      <button onClick={() => setVisible(false)} >Detener</button>
    </>
  )

}
export default RelojHooks;