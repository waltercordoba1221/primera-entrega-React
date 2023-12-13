import React from 'react'
import { Card, CardBody,Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'




const Item = ({productos}) => {
  return (
    <div className='card'>
      <Card maxW='sm'>
  <CardBody>
    <Image className='imagenes'
      src={productos.imagen}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>producto: {productos.titulo} 
      </Heading>
    <p>
         categoria: {productos.categoria}
    </p>
      <Text color='blue.600' fontSize='2xl'>
        $ {productos.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link className='btn'
    to={`/item/${productos.id}`}>
        detalle
      </Link> 
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Item