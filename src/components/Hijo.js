import Nieto from "./Nieto";

const Hijo = ({funcion}) => {

  return (
    <>
      <h2>Hijo</h2>
      <button onClick={funcion}>Incrementar +</button>
      <Nieto myClick={funcion} />
    </>
  )

}
export default Hijo;