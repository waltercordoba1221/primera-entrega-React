import { Card, CardBody,Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'


const ItemDetail = ({item}) => {
  
    const {carrito, Agregar} = useContext (CartContext)
    console.log(carrito)
    const [cantidad, setCantidad] = useState(1)

    const Restar = ()=>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const Sumar = ()=>{
      cantidad < item.stock &&  setCantidad(cantidad + 1)
    }
     
      
  return (
    <div className='card'>
      <Card maxW='sm'>
  <CardBody>
    <Image className='imagenes'
      src={item.imagen}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>producto: {item.titulo} 
      </Heading>
    <p>
         categoria: {item.categoria}
    </p>
      <Text color='blue.600' fontSize='2xl'>
        $ {item.precio}
        <p>{item.descripcion} </p>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        ver detalle
      </Button>
      <ItemCount cantidad={cantidad} Sumar={Sumar} Restar={Restar} Agregar={()=> Agregar(item, cantidad)} 
      
      />
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default ItemDetail