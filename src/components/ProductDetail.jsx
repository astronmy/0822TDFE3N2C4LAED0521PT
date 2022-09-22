import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/detail.module.css'
import ItemCount from "./ItemCount";
import CartContext from '../context/CartContext'

const ProductDetail = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const {id:productId} = useParams()

  const {addItem} = useContext(CartContext)

  const handleAddToCart = (quantity)=>{
    const {id, title, secure_thumbnail:image, price} = product
    addItem({id, title, image, price}, quantity)
  }

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
        {product.pictures && product.pictures.map( (image) => <img className={styles.imgProducto} src={image.secure_url} key={image.id} />)}
        <h5>{product.title}</h5>
        <ItemCount stock={product.available_quantity} onAddItem={handleAddToCart} />

      </>
  )


}
export default ProductDetail;