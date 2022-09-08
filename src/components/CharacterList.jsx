import { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';

import styles from '../styles/container.module.css'
import Character from './Character';

const CharacterList = () => {
  const [loading, setLoading] = useState(true)
  const [personajes, setPersonajes] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCharacters(page).then((data) => {
      setPersonajes(data)
      setLoading(false)
    })
  }, [page])


  const handleNext = () => {
    setPage(page + 1)
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  if (loading) {
    return (
      <h3>Obteniendo personajes....</h3>
    )
  }

  return (
    <>
      <div className={styles.buttonbar}>
        {page > 1 && <button onClick={handlePrev}>Prev</button>}
        <button onClick={handleNext}>Next</button>
      </div>
      <div className={styles.container}>
        {personajes.map((personaje) =>
          <Character key={personaje.id} {...personaje} />
        )
        }
      </div>
    </>
  )
}

export default CharacterList;