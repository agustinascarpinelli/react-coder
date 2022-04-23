import './ItemDetail.css';
import React,{ useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import  CartContext  from '../../context/CartContext';


const ButtonCount=({onConfirm,stock,initial=0})=>{
    const [count,setCount]=useState(initial)
    const increment=()=>{
        setCount(count +1)
    }
    const decrement=()=>{
        setCount (count -1)
    }
    return (
        <div className='buttonCount'>
            <p>{count}</p>
            <button className='decrement'onClick={decrement}>-</button>
            <button className='increment' onClick={increment}>+</button>
            <button className='confirm' onClick={()=>onConfirm(count)}>Add to cart</button>
        </div>
    )
}
const ItemDetail=({id,name,img,description,price,stock})=>{
    const [quantity,setQuantity]=useState(0)
    
    const {addItem, IsInCart}=useContext(CartContext)
    const handleAdd=(count)=>{
        const prodObj={id,name,price,quantity:count}
        addItem(prodObj)
    }
    return(
        <div className='itemDetailContainer'>
        <img src={img} alt={name}/>
        <div className='itemDetail'>
        <h5 >{name}</h5>
        <p className='description'>{description}</p>
        <p className='price'>$ {price}</p>
        {IsInCart(id)? <Link to='/cart'>Cart</Link>:<ButtonCount onConfirm={handleAdd} stock={stock} />}
        
        </div>
        </div>
     
        )
}

export default ItemDetail