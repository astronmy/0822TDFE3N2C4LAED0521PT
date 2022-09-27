
const baseUrl = "https://api.mercadolibre.com/"

export const getProducts = (query = 'chanclas') => {
  const url = `${baseUrl}sites/MLA/search?q=${query}`
  return new Promise((resolve, reject) =>{
      fetch(url)
      .then((response) => response.json())
      .then((result) => resolve(result.results))
      .catch((error) => reject(error))
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) =>  {
    const url = `${baseUrl}/items/${id}`
      fetch(url)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
  
}