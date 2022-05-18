import './CartWidget.css'
import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { cart } from 'react-icons-kit/entypo/cart';
import { Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit'


const CartWidget=()=>{
    const {getQuantity}=useContext(CartContext)
    const count=getQuantity()
    if (count===0){
        return null
    }

    return(
        <Link to='/cart'>
            <Icon icon={cart}></Icon>
            {count}
            </Link>
    );
}
export default CartWidget;