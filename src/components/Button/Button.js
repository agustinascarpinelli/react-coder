import React ,{ useState } from "react"
import './Button.css';
const ButtonCount=({onConfirm,initial,stock})=>{
    const [count,setCount]=useState(initial)
    const increment=()=>{
        if (count<stock){
        setCount(count +1)
    }}
    const decrement=()=>{
        if (count >0){
        setCount (count -1)
    }}
    
   if(stock === 0) {
    return <button className='Option' disabled>No hay stock</button>
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
 export default ButtonCount;