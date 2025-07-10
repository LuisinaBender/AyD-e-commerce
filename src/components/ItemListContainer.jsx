import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs } from "firebase/firestore"
import { dataBase } from "../service/firebase"


const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const [Loading, setLoading]= useState(false)
    const {categoryId} = useParams()
    

    useEffect(()=>{
        setLoading(true)
        const productsCollection = categoryId ? query(collection(dataBase, 'products'), where('category', '==', categoryId))
        : collection(dataBase, 'products')

        getDocs(productsCollection)
        .then((res)=>{
            console.log(res.docs)
            const list = res.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            setData(list)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId])


return(
    <>
    {
        Loading 
        ? <LoaderComponent/> 
        :<div>
        <h1 className="text-danger">{props.saludo}</h1>
        <ItemList data={data}/>
    </div>
    }
    </>
)
}


export default ItemListContainer