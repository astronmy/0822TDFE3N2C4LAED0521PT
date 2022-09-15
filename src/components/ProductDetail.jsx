import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const {id:productId} = useParams()

  const getProductDetail = (id) => {
    const url = `https://api.mercadolibre.com/items/${id}`
    setLoading(true)

    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setProduct(result))
        .finally(() => setLoading(false))
    }, 1200)
  }

  useEffect(() => {
    getProductDetail(productId)
  }, [])

  if (loading) {
    return (
      <h4>Obteniendo detalle producto....</h4>
    )
  }

  return (
      <>
        <h5>Detalle del Producto</h5>
        {product.pictures && product.pictures.map( (image) => <img src={image.secure_url} key={image.id} />)}
        <h5>{product.title}</h5>

      </>
  )


}
export default ProductDetail;