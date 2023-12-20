import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../firebase/config'

const Checkout = () => {
  const [pedidoId, setPedidoIde] = useState("")
  const {carrito, precioTotal, VaciarCarrito} = useContext(CartContext)
  const {register, handleSubmit} = useForm()
  const Enviar =(data)=>{
    const pedido = {
       Cliente: data,
       productos: carrito,
       Total: precioTotal()
    }
    console.log(pedido)
    const pedidosRef = collection(db, 'pedidos')
    addDoc(pedidosRef, pedido)
    .then((doc)=>{
      setPedidoIde(doc.id)
      VaciarCarrito()
    })
  }
  if(pedidoId){
    return(
      <div>
      <h1>Muchas gracias por tu compra</h1>
      <p>Tu numero de pedidoes: {pedidoId} </p>
      </div>
    )
  }
  return (
    <div className="container">
      <h1>Contactos</h1>
      <form className="formulario" onSubmit={handleSubmit(Enviar)}>
      <input type="text" placeholder="Ingresa tu nombre"{...register('nombre')} />
      <input type="email"placeholder="Ingresa tu email"{...register('email')} />
      <button className="btn3" type="submit">Comprar</button>
      </form>
    </div>
  )
}

export default Checkout