import React, { useEffect, useState } from 'react'
import { pedirItemId } from '../Datos/pedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const id = useParams().id;
console.log(id);
const [item, setItem] = useState(null);

useEffect(()=>{
  pedirItemId(Number(id))
  .then((res)=>{
    setItem(res)
  })
},[id])

  return (
    <div>
     {item && <ItemDetail item={item} />  }
    </div>
  )
}

export default ItemDetailContainer