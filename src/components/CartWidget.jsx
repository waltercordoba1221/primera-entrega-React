import React from 'react'
import { Badge } from '@chakra-ui/react'
const Cartwidget = () => {
  return (
    <div>
        <img src="carrito.png" width={40} alt="imagen" />
        <Badge colorScheme='green'>5</Badge>
    </div>
  )
}

export default Cartwidget