import './ItemDetail.css';
import React,{ useContext } from 'react'
import {Link} from 'react-router-dom'
import  CartContext  from '../../context/CartContext';
import ButtonCount from '../Button/Button';
import { useNotification } from '../../notification/Notification';

const ItemDetail=({id,name,img,description,price,stock})=>{
    
    const {addItem, IsInCart}=useContext(CartContext)
    const {setNotification}=useNotification()

    const handleAdd=(count)=>{
        const prodObj={id,name,price,quantity:count}
        addItem(prodObj)
        setNotification('success',`Se agregaron ${count} ${name} correctamente`)
    }
    return(
        <div className='itemDetailContainer'>
        <img src={img} alt={name}/>
        <div className='itemDetail'>
        <h5 >{name}</h5>
        <p className='description'>{description}</p>
        <p className='price'>$ {price}</p>
        <div>
        {IsInCart(id)? <Link to='/cart' className='Option'>Cart</Link>:<ButtonCount onConfirm={handleAdd} stock={stock} />}
        </div>
        </div>
        </div>
     
        )
}

export default ItemDetail