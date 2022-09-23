import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Product = ({ title, thumbnail, permalink, id }) => {
  const navigate = useNavigate()

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex'
      justifyContent='space-between' alignItems='center' p='3' >
      <Image src={thumbnail} alt={title} borderRadius='full' boxSize='100px' />
      <Text fontSize='1rem' color='crimson'>
        {title}
      </Text>
      <Button colorScheme='blue' fontSize='0.7rem' onClick={() => navigate(`/products/${id}`)}>Detalle</Button>
    </Box >
  )


}
export default Product;