import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getProducts, getOneProduct } from '../mock/AsyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getOneProduct(id)
            .then(res => setDetail(res))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id]) 

    if (loading) {
        return <p>Cargando producto...</p>
    }

    if (!detail) {
        return <p>No se encontró el producto</p>
    }

    return (
        <ItemDetail detail={detail} />
    )
}
export default ItemDetailContainer