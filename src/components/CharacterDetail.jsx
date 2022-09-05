import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../data/rickMortyService';
import styles from '../styles/character.module.css'

const CharacterDetail = () =>{
  const {data} = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    console.log(data)
    getCharacterById(data).then( response => {
      setCharacter(response.data)
    })
  }, [data])


  return (
      <div className={styles.character}>
          <h4>{character.name}</h4>     
          <img src={character.image} alt={character.name} />    
      </div>
  )
}
export default CharacterDetail;