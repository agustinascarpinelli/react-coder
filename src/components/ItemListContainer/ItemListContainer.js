import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from "react";
import { firestoreDB } from "../../services/firebase";
import {getDocs,collection,query,where} from 'firebase/firestore'
import Categories from '../Categories/Categories';



const ItemListContainer=()=>{
    const [products, setProducts] = useState([])
  
        useEffect(()=>{
         const collectionRef=collection(firestoreDB, 'products')
       
        getDocs(collectionRef).then(response => {
         const products = response.docs.map(doc => {
             return { id: doc.id, ...doc.data()}
         })
         setProducts(products)
     })},[])
    const [originId,setOriginId]=useState("")
    const [presentationId,setPresentationId]=useState("")
    const [priceId,setPriceId]=useState(0)


    useEffect(() => {
    const collectionRef = originId
    ? query(collection(firestoreDB, 'products'), where('origin', '==', originId ))
    : collection(firestoreDB,'products')


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
    : collection(firestoreDB,'products')


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
    ? query(collection(firestoreDB, 'products'), where('price', '<', priceId))
  : collection(firestoreDB,'products')


getDocs(collectionRef).then(response => {
    console.log(response)
    const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    setProducts(products)
})

}, [priceId])

const handleOrigin =(prod)=>{
    setOriginId(prod)
}
const handlePresentation =(prod)=>{
    setPresentationId(prod)
}
const handlePrice=(prod)=>{
    setPriceId(prod)
}
const returntoAllProducts=()=>{
    setOriginId("")
    setPresentationId("")
    setPriceId(0)
    getDocs(collection(firestoreDB,'products')).then(response => {
        console.log(response)
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
    })
}

   
if(products.length === 0) {
    return <div className='loading'><h1 className='loadingProd'>Cargando productos...</h1></div> 
    }
        return(
            <div className='itemListC'>
                <div className='cat'>
                    <div className='cat2'>
            <Categories handleOrigin={handleOrigin} handlePresentation={handlePresentation} handlePrice={handlePrice}></Categories>
            </div>
            </div>
            <div className='itemListContainer'>
               
            <ItemList cat='detail' products={products}/>
          
            </div>
            </div>
        )
    }
    export default ItemListContainer