import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
const Home =()=>{
    return(
        <section class="inicio">
        <div class="contenido-inicio">
            <h1>- Aroma cafe -</h1>
            <p>  Solo para amantes del verdadero café.</p>
            <Link className="buttonLink" to="/list" >Mirá nuestros productos</Link>
        </div>
    </section>
    )
}

export default Home;