import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";


const NavBar = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  
  return(
    <div className='nav'>
        <div className='leftSide'>
            <img src={'./images/aroma.png'}/>
        </div>
        <span><Link to='/list' className='navLink'>Nuestos Productos</Link></span>
            <span><Link to='/promo/' className='navLink'>Promociones</Link></span>
            <span><CartWidget></CartWidget></span>
      {user && <div><span><p>{user.email}</p></span>
             <span><button onClick={handleLogout}>Cerrar sesion</button></span></div>}
      {!user&& <div>
            <span><Link to='signup' className='navLink'>Registrarse</Link></span>
            <span><Link to="login" className='navLink'>Ingresar</Link></span></div>
         
      }

      
    </div>
)}
export default NavBar;
