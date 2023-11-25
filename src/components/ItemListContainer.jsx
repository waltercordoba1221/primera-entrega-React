import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../Datos/pedirDatos.js';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const categoria = useParams().categoria;
const [productos, setProductos] = useState([])
console.log(categoria);

useEffect(() => {
     pedirDatos()
      .then((res)=>{
        if(categoria){
          setProductos(res.filter((prod)=> prod.categoria === categoria) )
        }else{
          setProductos(res)
        }
      })
}, [categoria])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer