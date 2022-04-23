import React ,{ createContext,useState } from "react";

const CartContext=createContext()
export const CartContextProvider=({children})=>{
    const [cart, setCart]=useState([])
const addItem=(producToAdd)=>{
    setCart([...cart,producToAdd])
}
const getQuantity =()=>{
    let count =0
    cart.forEach(prod=>{count=count+=prod.quantity})
    return count
}

const IsInCart=(id)=>{
    cart.some(prod=>prod.id===id)
}
const ClearCart=()=>{
    setCart=([])
}
const removeItem=(id)=>{
    const prods=cart.filter(prod=>prod.id!==id)
    setCart(prods)
}

return (
    <CartContext.Provider value={{cart,addItem,getQuantity,IsInCart,ClearCart}}>
        {children}
    </CartContext.Provider>

)}
export default CartContext