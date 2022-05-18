import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { firestoreDB } from "../../services/firebase";
import {getDocs,collection,query,where} from 'firebase/firestore'
import { Categories } from './Categories';



const ItemListContainer=()=>{
    const [products, setProducts] = useState([])

    const [originId,setOriginId]=useState("")
    const [presentationId,setPresentationId]=useState("")
    const [priceId,setPriceId]=useState("")


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

useEffect(() => {
    const collectionRef = priceId
    ? query(collection(firestoreDB, 'products'), where('pruce', '<', priceId))
    : console.log("Error al cargar productos")


getDocs(collectionRef).then(response => {
    console.log(response)
    const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    setProducts(products)
})

}, [priceId])

const handleOrigin =(origin)=>{
    setPresentationId(origin)
}
const handlePresentation =(presentation)=>{
    setPresentationId(presentation)
}
const handlePrice=(price)=>{
    setPriceId(price)
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

   
if(products.length === 0) {
    return <h1>Cargando productos...</h1>
    }
        return(
            <div>
            <Categories handleOrigin={handleOrigin} handlePresentation={handlePresentation} handlePrice={handlePrice}></Categories>
            <a href="javascript:void(0)" onClick={returntoAllProducts}>Volver a todos los productos</a>
            <div>
            <ItemList cat='detail' products={products}/>
            </div>
            </div>
        )
    }
    export default ItemListContainer