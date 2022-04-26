import React ,{ useState } from "react"
import './Button.css';
const ButtonCount=({onConfirm,stock,initial=0})=>{
    const [count,setCount]=useState(initial)
    const increment=()=>{
        setCount(count +1)
    }
    const decrement=()=>{
        setCount (count -1)
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