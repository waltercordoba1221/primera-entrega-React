import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  
  return (
    <div>
         {
         productos.map((prod)=> <Item productos={prod} key={prod.id}/> )
         }
      
    </div>
  )
}

export default ItemList