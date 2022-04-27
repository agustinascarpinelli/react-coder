import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { firestoreDB } from "../../services/firebase";
import {getDoc,doc} from 'firebase/firestore'

const ItemDetailContainer=()=>{
    const [product,setProduct]=useState({})
    
    const {productId}=useParams()

    useEffect(()=>{
        getDoc(doc(firestoreDB,'products',productId)).then(response=>{
            const product={id:response.id,...response.data()}
            setProduct(product)
        })

        return (() => {
            setProduct()
        })
        
    },[productId])


   
    return(
        <div>
            {
               product?
            
        <ItemDetail {...product}/>:
        <h1>El producto no existe</h1>
            }
        </div>
    )
}
export default ItemDetailContainer;