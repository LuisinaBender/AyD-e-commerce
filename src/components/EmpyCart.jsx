import React from 'react'
import { Link } from 'react-router-dom';

const EmpyCart = () => {
    return (
        <div>
        <h2>Tu carrito esta vacio</h2>
        <p>Agrega productos para comenzar a comprar.</p>
        <p>Visita nuestra tienda para explorar los productos disponibles.</p>
        <Link to='/' className='btn btn-primary'>Ir a la tienda</Link>
        </div>
    )
}

export default EmpyCart
