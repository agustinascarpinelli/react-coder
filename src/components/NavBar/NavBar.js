import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {iosContactOutline} from 'react-icons-kit/ionicons/iosContactOutline'
import {Icon} from 'react-icons-kit'
const NavBar = () => {
  const { logout, user } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="nav">
      <div>
        <Link to="/">
          <img src={"./images/aroma.png"} />
        </Link>
      </div>
      
        <span>
          <Link to="/list" className="navLink">
            Nuestros productos
          </Link>
        </span>
        <span>
          <Link to="/promo/" className="navLink">
            Promociones
          </Link>
        </span>
    

      {user && (
        <div className="rightSide">
          <span>
            <p className="userName"><Icon icon={iosContactOutline}></Icon> {user.email}</p>
          </span>
          <span>
            <button className="logout" onClick={handleLogout}>
              Cerrar sesion
            </button>
          </span>
        </div>
      )}
      {!user && (
        <div className="rightSideIn">
          <span>
            <Link to="signup" className="navLink">
              Registrarse
            </Link>
          </span>
          <span>
            <Link to="login" className="navLink">
              Ingresar
            </Link>
          </span>
        </div>
      )}
      <span>
        <CartWidget></CartWidget>
      </span>
    </div>
  );
};
export default NavBar;
