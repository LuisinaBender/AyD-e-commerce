import React, { useState, useEffect } from 'react'

const ItemCount = () => {
    const [count, setCount] =useState(1)
    const [compra, setCompra]= useState(false)
    const sumar = ()=>{
        
        setCount(count +1)
    }
    const restar = ()=>{
        setCount(count -1)
    }
    const comprarItem = () => {
        setCompra(!compra)
    }
    //Es el mas usado
        useEffect(()=>{
        console.log('Con el array de dependencias vacio, me ejecuto UNA VEZ')
    },[])

    return (
    <div>
        <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={comprarItem}>Comprar</button>
    </div>
    )
}
export default ItemCount



