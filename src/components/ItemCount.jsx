import React, { useState, useEffect } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] =useState(1)
    const [compra, setCompra]= useState(false)
    const sumar = ()=>{
        if(count < stock){

            setCount(count +1)
        }
    }
    const restar = ()=>{
        setCount(count -1)
    }
    const comprarItem = () => {
        if(count > 0){

            setCount(count -1)
        }
    }
    const comprar = () =>{
    onAdd(count)
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
    <button className='btn btn-primary' disabled={stock === 0 }onClick={()=>onAdd}>Comprar</button>
    </div>
    )
}
export default ItemCount



