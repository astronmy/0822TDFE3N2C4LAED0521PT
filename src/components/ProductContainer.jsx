import { useEffect, useState } from "react"
import Product from "./Product"


const ProductContainer = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = (query = "chanclas") => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    setLoading(true)

    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setProducts(result.results))
        .finally(() => setLoading(false))
    }, 1500)
  }

  useEffect(() => {

    getProducts()

  }, [])


  if (loading) {
    return (
      <h4>Obteniendo productos....</h4>
    )
  }

  return (
    <>
      {products.map((producto) => <Product key={producto.id} {...producto} />)}
    </>
  )


}
export default ProductContainer;