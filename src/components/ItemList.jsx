import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ItemList.css';

const ItemList = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hay productos para mostrar.</p>;
    }

    return (
        <div className="item-list-container">
            {data.map(product => (
                <div key={product.id} className="product-card">
                    <img 
                        src={product.img} 
                        alt={product.name} 
                        className="product-img"
                    />
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">Precio: ${product.price}</p>
                    <Link to={`/item/${product.id}`} className="product-btn">
                        Ver detalle
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;

