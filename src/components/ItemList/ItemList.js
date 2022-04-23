import Item from "../Item/item"
import React from "react"
import './ItemList.css'

const ItemList=({products})=>{
    return(
        <div className="itemList">
            {products.map(prod=><Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList