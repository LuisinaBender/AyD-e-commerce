import React from 'react'
import ItemCount from './ItemCount'
import '../css/ItemDetail.css'


const ItemDetail = ({ detail }) => {

    const onAdd = (cantidad) => {
        alert('Agregaste ' + cantidad + ' unidades al carrito');
    }

    return (
        <div className="item-detail-container">
            <h2 className="h2_detail">Detalle del producto: {detail.name}</h2>
            <img src={detail.img} alt={detail.name} className="item-detail-img" />
            <p className="item-detail-text">Precio: ${detail.price}</p>
            <p className="item-detail-text">Descripción: {detail.description}</p>
            <p className="item-detail-text">Categoría: {detail.category}</p>
            <p className="item-detail-text">Stock disponible: {detail.stock}</p>
            <ItemCount stock={detail.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail;
