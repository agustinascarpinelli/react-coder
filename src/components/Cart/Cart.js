import React ,{ useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart =() =>{
    const{cart, removeItem,ClearCart,getQuantity}=useContext(CartContext)
    if (cart.length===0){
        return(
            <>
            <h1>No hay productos para mostrar </h1>
            <Link className="navbar-brand" to="/">
          <h3> Volver al inicio</h3>
        </Link>
        </>
        )
    }
    return (
        <>
        <h1>Cart</h1>
        <ul>{ cart.map(p=><li key={p.id}>{p.name} Cantidad:{p.quantity}precio uni: {p.price}  subtotal: {p.quantity * p.price} <button onClick={() => removeItem(p.id)}>X</button></li>)}

        </ul>
        <button onClick={()=>ClearCart()}>Vaciar carrito</button>
     
        </>
    )

}
export default Cart;