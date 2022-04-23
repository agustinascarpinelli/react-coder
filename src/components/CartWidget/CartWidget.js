import './CartWidget.css'
import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';


const CartWidget=()=>{
    const {getQuantity}=useContext(CartContext)
    return(
        <div>
            <img src="\images\cart.png" alt="cart" className="cart-image"/>
            {getQuantity()}
        </div>
    );
}
export default CartWidget;