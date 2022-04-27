import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { firestoreDB } from "../../services/firebase";
import {getDocs,collection,query,where,orderBy,limit} from 'firebase/firestore'



const ItemListContainer=()=>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
    const collectionRef = categoryId 
    ? query(collection(firestoreDB, 'products'), where('category', '==', categoryId))
    : query(collection(firestoreDB, 'products'), orderBy("name", "desc"), limit(3))


getDocs(collectionRef).then(response => {
    console.log(response)
    const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    setProducts(products)
})

}, [categoryId])

if(products.length === 0) {
return <h1>No hay productos</h1>
}
    return(
        <div>
        <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;