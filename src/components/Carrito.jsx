import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Formulario from './Formulario'

function Carrito() {

    const {carrito, precioTotal, VaciarCarrito} = useContext(CartContext)
    const Vaciar = ()=>{
     VaciarCarrito()
    }
  return (
    <div className='container'>
        <h1>Carrito</h1>

        {
            carrito.map((prod)=>(
                <div key={prod.id}>
                    <br />
                <h3>{prod.titulo} </h3>
                <p>Precio unitario; ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad} </p>
                <br/>
                </div>
            ))
        }
        {
         carrito.length > 0 ?
        <>
        <h2>Precio total: ${precioTotal()} </h2>
        <button className='btn3' onClick={Vaciar}>Vaciar</button>
        <Formulario/>
        </>:
        <h3>El carrito esta vacio</h3>
        }
    </div>
  )
}

export default Carrito