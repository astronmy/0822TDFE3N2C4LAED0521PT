import './App.css';
import { useEffect, useState } from 'react';
import Character from './components/Character';
import styles from './styles/container.module.css'

const endpoint = "https://rickandmortyapi.com/api/character/?page="

function App() {
  const [loading, setLoading] = useState(true)
  const [personajes, setPersonajes] = useState([])
  const [page, setPage] = useState(1)

  useEffect( () => {
      fetch(endpoint+page)
      .then( (response) => response.json())
      .then( (data) => {
            setPersonajes(data.results)
            setLoading(false)
      })
  }, [page])


  const handleNext = () =>{
      setPage(page+1)
  }

  const handlePrev = () =>{
    if(page > 1){
      setPage(page-1)
    }
  }


  if(loading){
    return (
        <h3>Obteniendo personajes....</h3>
    )
  }
  
  return (
    <>
      <div className={styles.buttonbar}>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
      </div>
      <div className={styles.container}>
          {personajes.map((personaje) =>
            <Character key={personaje.id} name={personaje.name} image={personaje.image} />
            )
          }
      </div>   
    </>
  )
}

export default App;
