import React ,{ useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'
const Cart =() =>{
    const{cart, removeItem,ClearCart,getQuantity}=useContext(CartContext)
    if (cart.length===0){
        return(
            <div className="noProd">
            <h1>No hay productos para mostrar </h1>
            <Link className="navbar-brand" to="/">
          <h3> Volver al inicio</h3>
        </Link>
        </div>
        )
    }
    return (
        <div className="cartOrder">
        <h1>Productos</h1>
        <ul>{ cart.map(p=><li key={p.id}>{p.name} <button className="removeP" onClick={() => removeItem(p.id)}>Eliminar</button><br></br> Cantidad: {p.quantity}<br></br>Precio uni: $ {p.price} <br></br> Subtotal: $ {p.quantity * p.price}</li> )}
        </ul>
        <div className="finOr">
        <button onClick={()=>ClearCart()}>Vaciar carrito</button>
        <Link to="/cashout">Finalizar compra</Link>
        </div>
        
     
        </div>
    )

}
export default Cart;