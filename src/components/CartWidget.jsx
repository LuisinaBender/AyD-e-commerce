import { FaOpencart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CarWidget = () => {
    const { cartQuantity } = useContext(CartContext);


    return (
        <div className="carWidget">
        <FaOpencart />
        <Badge bg="danger" className="notificacion">{cartQuantity()}</Badge>
        </div>
    );
    };

export default CarWidget;
