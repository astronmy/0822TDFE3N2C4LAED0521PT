import axios from 'axios'
const baseUrl = 'http://127.0.0.1:3000/api/v1/'

export const createPreference = async(cart) => {
  const endpoint = `${baseUrl}/pagar/`
  const response = await axios.post(endpoint, cart)
  return response.data
}