import {useState} from 'react'
import { Button, Badge, useToast, } from '@chakra-ui/react'
const ItemCount = () => {

    const toast = useToast()

    const [count, setCount] = useState(0)
    
  const incrementar = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
    const agregar =()=>{
        toast({
            title: 'Felicidades',
            description: `Has agregado ${count} unidades a tu carrito`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    }
    
  return (
    <div>
    <Button colorScheme='teal' variant='outline' onClick={incrementar}>
    +
    </Button>
    <Badge colorScheme='purple'>{count} </Badge>
     <Button colorScheme='teal' variant='outline' onClick={decrementar}>
    -
    </Button>
  
  <Button colorScheme='purple' onClick={agregar}>Agrega</Button>
    </div>
  )
}

export default ItemCount