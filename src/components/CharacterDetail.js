import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import styles from "../styles/detail.module.css"

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const {id} = useParams();

  useEffect( () => {
    getCharacterById(id).then( (response) => {
        setCharacter(response.data)
    })
  }, [id])


  return (
    <h2 className={styles.name}>{character.name}</h2>
  )
}
export default CharacterDetail;