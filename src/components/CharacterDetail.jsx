import { useEffect } from "react"
import { useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";

const CharacterDetail = ( ) => {
  const [character, setCharacter] = useState({})
  const {id} = useParams();
  const location = useLocation()

  useEffect(() => {
    if(location.state){
      const {name, image} = location.state
      setCharacter({
        name,
        image
      })
    }
      getCharacterById(id).then( (response) => {
        //setCharacter(response.data)
      })
  },[id]);

  return (
      <>
          <Outlet />
          <img src={character.image} alt={character.name} />
          <h2 style={{color: 'white'}}>{character.name}</h2>
          <Link to="info">Mas info</Link>
      </>
  )
}
export default CharacterDetail;