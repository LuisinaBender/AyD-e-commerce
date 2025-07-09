import { FaOpencart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CarWidget = () => {
    const { cart } = useContext(CartContext);

    // Sumar todas las cantidades
    const totalItems = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

    return (
        <div className="carWidget">
        <FaOpencart />
        <Badge bg="danger" className="notificacion">{totalItems}</Badge>
        </div>
    );
    };

export default CarWidget;
