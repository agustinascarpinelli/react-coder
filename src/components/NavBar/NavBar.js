import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from 'react-router-dom'
import React, { useEffect,useState } from "react";
import { getCategories } from "../asyncmock/asyncmock";


const NavBar = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    getCategories().then(categories=>{
      setCategories(categories)
    })
  },[])
  return (
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to='/'>
          <h3 > Ecommerce</h3>
          </Link>
          <div className="categories">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {categories.map(cat=> <li className="nav-item" key={cat.id}> <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive})=>isActive?'ActiveOption':'Option'} >{cat.description}</NavLink> </li>)}
            
            </ul>

            <div>
              <CartWidget />
            </div>
          </div>
        </div>
        </div >
      </nav>
   
  );
};

export default NavBar;
