import { Badge } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Cartwidget = () => {


  const {cantidadCarrito} = useContext (CartContext)
  return (
    <div>
       <Link to={'/Carrito'}>
        <img src="carrito.png" width={40} alt="imagen" />
        </Link>
        <Badge colorScheme='green'>{cantidadCarrito()} </Badge>
        
    </div>
  )
}

export default Cartwidget