import React from 'react'
import { useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")
    const db = getFirestore()
    const handleSubmit =(e)=>{
    e.preventDefault()
    addDoc(orderCollection, order).then(({id})=>
    setId(id))
    
      const order ={
        nombre,
        email
      }
    const orderCollection = collection(db, "ordenes")

    }
  return ( 
    <div>
      <h1>Registrate</h1>
        <form className='formulario' action="" onSubmit={handleSubmit} >
        <input type='text' onChange={(e)=> setNombre(e.target.value)} placeholder='Ingrese su nombre'/>
        <input type='email' onChange={(e)=> setEmail(e.target.value)} placeholder='Ingrese su email' />
        <button className='btn' type='submit'>Emviar</button>
        </form>
        <p>purchese order: {id} </p>
    </div>
  )
}

export default Formulario