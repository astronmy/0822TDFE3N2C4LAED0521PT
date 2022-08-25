import { useEffect } from "react";


const Reloj = ({hora}) => {
  useEffect(() =>{
      console.log("reloj montado")

      return () => {
          console.log("reloj desmontado")
      }

  }, [])

  useEffect(() =>{
    console.log("reloj actualizado")

}, [hora])


  return (
      <h2>{hora}</h2>
  )
}
export default Reloj;