import React, { useEffect,useState } from "react";
import { firestoreDB } from "../../services/firebase";
import {getDocs,collection} from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
export const ItemPromoContainer =()=>{
   const [products,setProducts]=useState([])
  
   useEffect(()=>{
    const collectionRef=collection(firestoreDB, 'promo')
  
   getDocs(collectionRef).then(response => {
    const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
    })
    setProducts(products)
})},[])

   

   
   
if(products.length === 0) {
    return <h1>Cargando productos...</h1>
    }
        return(
            <div>
            <ItemList cat='promo' products={products}/>
            </div>
        )
    }
    export default ItemPromoContainer