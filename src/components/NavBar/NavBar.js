import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";


const NavBar = () => {
  
  
  return(
    <div className='nav'>
        <div className='leftSide'>
            <img src={'./images/aroma.png'}/>
        </div>
      
            <span><Link to='/list' className='navLink'>Nuestos Productos</Link></span>
            <span><Link to='/promo/' className='navLink'>Promociones</Link></span>
            <span><CartWidget></CartWidget></span>


      
    </div>
)}
export default NavBar;
