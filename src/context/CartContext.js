import React ,{ createContext,useState } from "react";
import { useNotification } from "../notification/Notification";

const CartContext=createContext()
export const CartContextProvider=({children})=>{
    const [cart, setCart]=useState([])
    const {setNotification}=useNotification()
const addItem=(productToAdd)=>{
    if(!IsInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
    } else {
        const newProducts = cart.map(prod => {
            if(prod.id === productToAdd.id) {
                const newProduct = {
                    ...prod,
                    quantity: productToAdd.quantity
                }
                return newProduct
            } else {
                return prod
            }
        })
        setCart(newProducts)
    }
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

const getQuantityProd=(id)=>{

    const item=cart.find(prod=>prod.id===id)
    if (item){
       console.log (item)
        const p= item.quantity
        console.log (p)
        return p;
  
      
    }else{return 1}
    
  
  }
  

return (
    <CartContext.Provider value={{cart,addItem,getQuantity,IsInCart,ClearCart,removeItem,getQuantityProd}}>
        {children}
    </CartContext.Provider>

)}
export default CartContext