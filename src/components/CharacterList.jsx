import { useEffect, useState } from 'react';
import Character from "./Character";
import styles from '../styles/container.module.css'
import { getCharacters } from "../data/rickMortyService";


function CharacterList() {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
     getCharacters(page).then( data =>{
       setPersonajes(data)
       setLoading(false)
     });

  }, [page])


  const handleNext = () => {
      setPage(page + 1)
  }


  if (loading) {
    return (
      <h3>Obteniendo personajes....</h3>
    )
  }

  return (
    <>
      <div className={styles.buttonbar}>
        {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
        <button onClick={handleNext}>Next</button>
      </div>
      <div className={styles.container}>
        {personajes.map((personaje) =>
          <Character key={personaje.id} id={personaje.id} name={personaje.name} image={personaje.image} />
        )
        }
      </div>
    </>
  )
}

export default CharacterList;
