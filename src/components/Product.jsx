import { Link } from 'react-router-dom';
import styles from '../styles/product.module.css'

const Product = ({title, thumbnail, permalink, id}) => {

  return (
      <div className={styles.product}>
        <img src={thumbnail} alt={title} />
        <h5>{title}</h5>
        <a href={permalink} target="_blank"> A Meli </a>
        <Link to={`/products/${id}`}>Detalle</Link>
      </div>
  )


}
export default Product;