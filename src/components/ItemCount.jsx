import React, { useState, useEffect } from 'react';
import '../css/ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);
    const [compra, setCompra] = useState(false);

    const sumar = () => {
        if (count < stock) {
        setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };

    const comprarItem = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const comprar = () => {
        onAdd(count);
    };

    useEffect(() => {
        console.log('Con el array de dependencias vacio, me ejecuto UNA VEZ');
    }, []);

    return (
        <div className="counter-container">
        <div className="counter-controls">
            <button className="btn_restar" onClick={restar}>-</button>
            <span className="btn_count">{count}</span>
            <button className="btn_sumar" onClick={sumar}>+</button>
        </div>
        <button className="btn_comprar" disabled={stock === 0} onClick={() => onAdd(count)}>
            Comprar
        </button>
        </div>
    );
};

export default ItemCount;
