import React from 'react';
import { Link } from 'react-router-dom';

const EmpyCart = () => (
    <div style={{ textAlign: 'center', marginTop: '2rem', color: '#553c26' }}>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para comenzar a comprar.</p>
        <Link 
            to="/" 
            style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#b27c3e',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600'
            }}
        >
            Ir a la tienda
        </Link>
    </div>
);

export default EmpyCart;


