import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ data }) => {
    
    if (!data || data.length === 0) {
        return <p>No hay productos para mostrar.</p>;
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {data.map(product => (
            <div 
            key={product.id}
            >
            <h3>{product.name}</h3>
            <img 
                src={product.img} 
                alt={product.name} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} 
            />
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`}>
                <button style={{ padding: '8px 12px', cursor: 'pointer' }}>
                Ver detalle
                </button>
            </Link>
            </div>
        ))}
        </div>
    );
}

export default ItemList;
