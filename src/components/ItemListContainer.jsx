import '../css/ItemListContainer.css';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncMock';


const ItemListContainer = (props) => { 
    const [data, setData] = useState([]);
    useEffect(() => {
        getProducts()
            .then((respuesta) => {
                setData(respuesta);
            })
            .catch((error) => {
                console.error('Error al cargar los productos:', error);
            });
    }, []);
    

    return (
        <div className="container">
        <h1>{props.saludo}</h1>
        </div>
    );
}

export default ItemListContainer;