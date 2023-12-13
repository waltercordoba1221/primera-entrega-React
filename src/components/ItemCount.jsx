


const ItemCount = ({cantidad, Sumar, Restar, Agregar}) => {

    
  return (
    <div>
        <div className='Count'>
           <button className="btn2" onClick={Restar}>-</button>
           <p>{cantidad}</p>
           <button className="btn2" onClick={Sumar}>+</button>
       </div>
       <button className="btn3" onClick={Agregar}>Agregar</button>
    </div>
  )
}

export default ItemCount