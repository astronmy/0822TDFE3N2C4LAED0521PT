import { Box, Container, Grid, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
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
    }, 1400)
  }

  useEffect(() => {

    getProducts()

  }, [])


  if (loading) {
    return (
        <Grid templateColumns='repeat(1, 1fr)' gap={6}>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' />
          </Box>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' />
          </Box>
          <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' />
          </Box>

        </Grid>
    )
  }

  return (
    <Container maxW='4xl' centerContent >
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        {products.map((producto) => <Product key={producto.id} {...producto} />)}
      </Grid>
    </Container>
  )


}
export default ProductContainer;