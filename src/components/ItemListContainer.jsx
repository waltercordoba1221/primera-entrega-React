import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase/config.js'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;


useEffect(() => {
  const prodectusRef = collection(db, "productos")

  const q = categoria ? query(prodectusRef, where("categoria", "==", categoria)): prodectusRef

  getDocs(q)
  .then((resp)=>{
    
    setProductos(
      resp.docs.map((doc)=>{
        return{...doc.data(), id: doc.id}
      })
    )

    
  })
   
}, [categoria])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer