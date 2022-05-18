import React,{useContext}from'react';
import CartContext from "../../context/CartContext";
import Form from '../Form/form';

const Order=()=>{
const{cart,getQuantity}=useContext(CartContext)

return(
    <>
    <Form/>
    <div>
    <h1>Cart</h1>
    <ul>{ cart.map(p=><li key={p.id}>{p.name} Cantidad:{p.quantity}precio uni: {p.price}  subtotal: {p.quantity * p.price} </li>)}

</ul>
        <p>El total de la compra es:{getQuantity()}</p>
    </div>
    </>
)



}
export default Order;