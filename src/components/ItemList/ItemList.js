import Item from "../Item/item"
import React from "react"
import './ItemList.css'

const ItemList=({products, cat})=>{
    return(
        <div className="itemList">
            {products.map(prod=><Item  cat={cat} key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList