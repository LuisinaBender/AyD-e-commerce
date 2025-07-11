import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts, products } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { addDoc, collection } from 'firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'
import { dataBase } from "../services/firebase";


const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const [cargando, setCargando]= useState(false)
    const {id} = useParams()


    useEffect(()=>{
        setCargando(true)

        const productsCollection = collection(dataBase, 'products')
        const docRef = doc(productsCollection, id)
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetail({id: res.id, ...res.data()})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, [])

    const subirData = () => {
        console.log('Click')
        const collectionProducts = collection(dataBase, 'products')
        products.map((prod) => addDoc(collectionProducts, prod))
    }
    return (
        <>
        {cargando ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
        </>
    )
}

export default ItemDetailContainer