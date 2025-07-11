import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs } from "firebase/firestore"
import { dataBase } from "../services/firebase"
import { query } from "firebase/firestore"
import { where } from "firebase/firestore"
import '../css/ItemListContainer.css'
import 'animate.css'
import { TbBackground } from "react-icons/tb"



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
        :<div style={{backgroundColor: '#fff8f0', paddingTop: '0px', width: '100%'}}>
        <h1
            className="container animate__animated animate__fadeInDown"
            style={{
                color: 'rgb(85, 60, 38)',
                fontWeight: 600,
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                marginBottom: '1rem',
                textAlign: 'center',
            }}
            >
            {props.saludo}
</h1>

        <ItemList data={data}/>
    </div>
    }
    </>
)
}


export default ItemListContainer