import React ,{ createContext,useState } from "react";
import { useNotification } from "../notification/Notification";

const CartContext=createContext()
export const CartContextProvider=({children})=>{
    const [cart, setCart]=useState([])
    const {setNotification}=useNotification()
const addItem=(producToAdd)=>{
    setCart([...cart,producToAdd])
}
const getQuantity =()=>{
    let count =0
    cart.forEach(prod=>{count=count+=prod.quantity})
    return count
}

const IsInCart=(id)=>{
  return  cart.some(prod=>prod.id===id)
}
const ClearCart=()=>{
    setCart([])
}
const removeItem=(id)=>{
    const p= cart.find(prod=>prod.id===id)
    const prods=cart.filter(prod=>prod.id!==id)
    setCart(prods)
    setNotification('error', `Se eliminaron ${p.quantity} ${p.name}`)
}

return (
    <CartContext.Provider value={{cart,addItem,getQuantity,IsInCart,ClearCart,removeItem}}>
        {children}
    </CartContext.Provider>

)}
export default CartContext