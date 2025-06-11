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
    //No se recomienda 
    useEffect(()=>{
        console.log('Sin el array de dependencias me ejecuto SIEMPRE')
    })
    //Es el mas usado
        useEffect(()=>{
        console.log('Con el array de dependencias vacio, me ejecuto UNA VEZ')
    },[])
    //Se usa en casos especificos
        useEffect(()=>{
        console.log('Con el array de dependencias con datos, me ejecuto cuando se monta el componente y cada vez que lo que esta escuchando se actualice')
    },[compra])
    
    console.log('soy item count')
     //No se recomienda 
    useEffect(()=>{
        console.log('Sin el array de dependencias me ejecuto SIEMPRE')
    })


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



