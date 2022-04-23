import {Link} from 'react-router-dom'
import './item.css'
import React from 'react'
const Item =({id, name, img,price})=>{
    return(
        <div>
    
    <div className="card" >
    <img className="card-img-top " src={img} alt={name}/>
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="info">Precio: {price}</p>
    <Link to={`/detail/${id}`} className="btn btn-primary">Ver detalle</Link>
    </div>
    </div>
    </div>
    )
}

export default Item