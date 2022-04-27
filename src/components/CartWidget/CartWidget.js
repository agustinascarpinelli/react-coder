import './CartWidget.css'
import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget=()=>{
    const {getQuantity}=useContext(CartContext)
    const count=getQuantity()
    if (count===0){
        return null
    }

    return(
        <Link to='/cart'>
            <img src="\images\cart.png" alt="cart" className="cart-image"/>
            {count}
            </Link>
    );
}
export default CartWidget;