import React,{useState} from 'react'
const Categories =({handleOrigin,handlePresentation,handlePrice})=>{

const [origin]=useState([
    {id:'Brasil', text:'Brasil'},
    {id:'Colombia', text:'Colombia'},
    {id:'Guatemala', text:'Guatemala'},
    {id:'Italia', text:'Italia'},
])

const [presentation]=useState([
    {id:'Capsula', text:'Capsula'},
    {id:'Grano', text:'Grano'},
    {id:'Molido', text:'Molido'},
])

const [price]=useState([
    {id:900, text:'Hasta 900'},
    {id:1000, text:'Hasta 1000'},
    {id:2000, text:'Hasta 2000'},
    {id:3000, text:'Hasta 3000'},
])


    return(

            <div className="filter-box">
                
                <h6>Origen</h6>
                {origin.map((prod,index)=>{
                 return   <span key={index} id={prod.id}
                    onClick={()=>handleOrigin(prod.id)}>{prod.text}</span>
                })}
                   <h6>Presentacion</h6>
                {presentation.map((prod,index)=>{
                  return  <span key={index} id={prod.id}
                    onClick={()=>handlePresentation(prod.id)}>{prod.text}</span>
                })}
                     <h6>Precio</h6>
                {price.map((prod,index)=>{
                  return  <span key={index} id={prod.id}
                    onClick={()=>handlePrice(prod.id)}>{prod.text}</span>
                })}

                
            </div>
    )
            }
            export default Categories;