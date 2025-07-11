import ItemCount from './ItemCount'
import '../css/ItemDetail.css'
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react';
import { Link } from 'react-router-dom';





const ItemDetail = ({ detail }) => {

    const { addItem } = useContext(CartContext);
    const [purchase, setPurchase] = useState(false);

    const onAdd = (cantidad) => {
        addItem(detail, cantidad);
        setPurchase(true);
    
    }
    return (
        <div className="item-detail-container">
            <h2 className="h2_detail">Detalle del producto: {detail.name}</h2>
            <img src={detail.img} alt={detail.name} className="item-detail-img" />
            <p className="item-detail-text">Precio: ${detail.price}</p>
            <p className="item-detail-text">Descripción: {detail.description}</p>
            <p className="item-detail-text">Categoría: {detail.category}</p>
            <p className="item-detail-text">Stock disponible: {detail.stock}</p>
            {
                purchase ? <Link className='btn btn-success' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detail.stock} onAdd={onAdd} />
            }
        </div>
    )
}

export default ItemDetail
