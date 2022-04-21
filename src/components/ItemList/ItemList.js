import Item from "../Item/item"
import React from "react"

const ItemList=({products})=>{
    return(
        <div>
            {products.map(prod=><Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList