import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { firestoreDB } from "../../services/firebase";
import {getDocs,collection,query,where} from 'firebase/firestore'



const ItemListContainer=()=>{
    const [products, setProducts] = useState([])

    const [originId,setOriginId]=useState("")
    const [presentationId,setPresentationId]=useState("")

    useEffect(() => {
    const collectionRef = originId
    ? query(collection(firestoreDB, 'products'), where('origin', '==', originId ))
    : console.log("Error al cargar productos")


getDocs(collectionRef).then(response => {
    console.log(response)
    const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    setProducts(products)
})

}, [originId])

useEffect(() => {
    const collectionRef = presentationId
    ? query(collection(firestoreDB, 'products'), where('presentation', '==', presentationId))
    : console.log("Error al cargar productos")


getDocs(collectionRef).then(response => {
    console.log(response)
    const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    setProducts(products)
})

}, [presentationId])

const handleOrigin =(origin)=>{
    setPresentationId(origin)
}
const handlePresentation =(presentation)=>{
    setPresentationId(presentation)
}

const returntoAllProducts=()=>{
    setOriginId("")
    setPresentationId("")
    getDocs(collection(firestoreDB,'products')).then(response => {
        console.log(response)
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
    })
}


return <h1>No hay productos</h1>
}
    return(
        <div>
        <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;