import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { id, name, price, img } = product;

    return (
        <div className="custom-card">
            <img src={img} alt={name} className="custom-card-img" />
            <div className="custom-card-body">
                <h5 className="custom-card-title">{name}</h5>
                <p className="custom-card-price">${price},00</p>
                <Link to={`/item/${id}`} className="custom-card-btn">
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default Item;




