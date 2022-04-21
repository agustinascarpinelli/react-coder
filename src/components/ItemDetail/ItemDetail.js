import React,{ useState } from 'react'
import {Link} from 'react-router-dom'


const ButtonCount=({onConfirm,stock,initial=0})=>{
    const [count,setCount]=useState(initial)
    const increment=()=>{
        setCount(count +1)
    }
    const decrement=()=>{
        setCount (count -1)
    }
    return (
        <div>
            <p>Count</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=>onConfirm(count)}>Add to cart</button>
        </div>
    )
}
const ItemDetail=({id,name,img,description,price,stock})=>{
    const [quantity,setQuantity]=useState(0)
    const handleAdd=(count)=>{
    setQuantity(count)}

    return(
        <div  >
        <h5 >{name}</h5>
        <img src={img} alt={name}/>
        <div >
        <p>{description}</p>
        <p>$ {price}</p>
        {quantity>0 ? <Link to='/cart'>Cart</Link>:<ButtonCount onConfirm={handleAdd} stock={stock} />}

        </div>
        </div>
            
        )
}

export default ItemDetail