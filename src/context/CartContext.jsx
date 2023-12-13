import { createContext, useState, } from "react";
import { Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [carrito, setCarrito]  = useState ([]) 
const Agregar = (item, cantidad)=>{
  const intemAgregado = {...item, cantidad}
  const nuevoCarrito = [...carrito]
  const estaEnCarrito = nuevoCarrito.find((producto)=> producto.id === intemAgregado.id )
  if(estaEnCarrito){
    estaEnCarrito.cantidad += cantidad
  }else{
    nuevoCarrito.push(intemAgregado)
  }   
  setCarrito(nuevoCarrito)
    
  }
const cantidadCarrito = ()=>{
return carrito.reduce((acc, prod)=> acc + prod.cantidad, 0)
}
const precioTotal = () =>{
  return carrito.reduce((acc, prod)=> acc + prod.precio * prod.cantidad,0)
}
  const VaciarCarrito = () =>{
    setCarrito([])
  }
  return(
    <CartContext.Provider value={{carrito, Agregar,cantidadCarrito, precioTotal, VaciarCarrito}}>
{children}
    </CartContext.Provider>
  )
}



