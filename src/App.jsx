import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Character from './components/Character';
import styles from './styles/container.module.css'

const endpoint = "https://rickandmortyapi.com/api/character/?page="

function App() {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [buttonPages, setButtonPages] = useState([])

  /* fetch(endpoint+page)
  .then( (response) => response.json())
  .then( (data) => {
        setPersonajes(data.results)
        setLoading(false)
  })
 */

  /* useEffect( () => {
      axios.get(endpoint+page).then((response) => {
        console.log(response)
        const characters = response.data.results;
        const info = response.data.info;

        setPersonajes(characters)
        setTotal(info.pages)
        setLoading(false)

        let buttons = [];
        for (let index = 1; index <= total; index++) {
           buttons.push((<button onClick={()=> setPage(index)}>{index}</button>))
        }

        setButtonPages(buttons)

      })
  }, [page]) */


  useEffect(() => {
    async function getApiData() {
      const url = endpoint + page;
      // llamo a la API
      const response = await axios.get(url);

      const characters = response.data.results;
      const info = response.data.info;

      setPersonajes(characters)
      setTotal(info.pages)
      setLoading(false)

      let buttons = [];
      for (let index = 1; index <= total; index++) {
        buttons.push((<button onClick={() => setPage(index)}>{index}</button>))
      }

      setButtonPages(buttons)

    }
    getApiData()

  }, [page])


  const handleNext = () => {
    if (page < total) {
      setPage(page + 1)
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
        {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
        <button onClick={handleNext}>Next</button>
      </div>
      <div className={styles.container}>
        {personajes.map((personaje) =>
          <Character key={personaje.id} name={personaje.name} image={personaje.image} />
        )
        }
      </div>
      <div className={styles.pagination}>
        {/*  {buttonPages.map( (item) => item)} */}
        {/* <input type="text" onChange={(e) => setPage(e.target.value)} /> */}
      </div>
    </>
  )
}

export default App;
