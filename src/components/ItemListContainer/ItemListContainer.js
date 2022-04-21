import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

import { getProducts } from '../asyncmock/asyncmock';

const ItemListContainer=(props)=>{
    const [products,setProducts]=useState([])
    const {categoryId}=useParams()
    useEffect(()=>{
        getProducts(categoryId).then(prods=>{
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return(
        <div>
        <h1 className='first-title'>{props.greeting}</h1>
        <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;