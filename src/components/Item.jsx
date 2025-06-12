import React from 'react'
import { Link } from 'react-router-dom';



const Item = (products) => {
    
    // Desestructuración de las propiedades del objeto products
    const { id, name, price, img } = products;
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price},00</p>
                <Link to={'/item/'+id} className="btn btn-primary">Ver Más</Link>
            </div>
        </div>
    )
}

export default Item
