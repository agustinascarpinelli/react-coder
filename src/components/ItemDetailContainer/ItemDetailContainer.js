import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import { getProductsById } from "../asyncmock/asyncmock";
import {useParams} from 'react-router-dom';

const ItemDetailContainer=()=>{
    const [product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
    const {productId}=useParams()

    useEffect(()=>{
        getProductsById(productId).then(prod=>{
            setProduct(prod)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
        return (()=>{
            setProduct()
        })
    },[productId])

    return(
        <div>
            {
                loading?<h1>Cargando...</h1>:product?
            
        <ItemDetail {...product}/>:
        <h1>El producto no existe</h1>
            }
        </div>
    )
}
export default ItemDetailContainer;