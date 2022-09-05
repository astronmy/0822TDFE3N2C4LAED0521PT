import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";


export const getCharacters = async (page = null) => {
  const endpoint   =  `${baseUrl}character/${page ? `?page=${page}` : ''}`
  const response   =  await axios.get(endpoint);
  const characters =  response.data.results;

  return characters;
}

export const getCharacterById = async( id) => {
  const  endpoint = `${baseUrl}character/${id}`
  return await axios.get(endpoint);
}

