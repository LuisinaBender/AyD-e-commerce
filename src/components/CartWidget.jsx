import { FaOpencart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CarWidget = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div className="carWidget">
            <FaOpencart />
            <Badge bg="danger"className="notificacion">{cart.length}</Badge>
        </div>
    );
}

export default CarWidget;