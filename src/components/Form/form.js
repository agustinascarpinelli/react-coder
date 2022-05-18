import React,{ useEffect, useState } from 'react'

const Form = () => {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }
    
    useEffect(()=>{
        
       

    })
    



    return (
        <form onSubmit={handleSubmit}>
            <label >Nombre:</label>
            <input type='text' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
               <label >Apellido:</label>
            <input type='text' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
               <label >Telefono:</label>
            <input type='number' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
               
               <label >Direccion:</label>
            <input type='text' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />

            <button type='submit'>submit</button>
        </form>
    )
}

export default Form 