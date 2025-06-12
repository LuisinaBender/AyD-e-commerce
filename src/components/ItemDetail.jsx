import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {

    const onAdd = (cantidad)=> {
        alert('Agregaste ' + cantidad + ' unidades al carrito');
    }
    return (
        <div style={{border: '1px solid #ccc', padding: '20px', margin: '20px'}}>
            <h2>Detalle del producto: {detail.name}</h2>
            <p>Precio: ${detail.price}</p>
            <p>Descripción: {detail.description}</p>
            <p>Categoría: {detail.category}</p>
            <img src={detail.img} alt={detail.name} style={{width: '200px', height: '200px'}} />
            <p>Stock: {detail.stock}</p>
            <ItemCount stock={detail.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
