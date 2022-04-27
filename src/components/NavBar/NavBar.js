import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDocs,collection} from 'firebase/firestore';
import { firestoreDB } from "../../services/firebase";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
 useEffect(()=>{
 getDocs(collection(firestoreDB,'categories')).then(response=>{
   const categories=response.docs.map(doc=>{
     return{id:doc.id,...doc.data()}

   })
   setCategories(categories)
 })
}

  , []);

  return (
    <nav className="navBar">
     
        <Link className="navbar-brand" to="/">
          <h3> Ecommerce</h3>
        </Link>
        <div >
          <ul className="navBarLinks" >
            {categories.map((cat) => (
              <li className="navItem" key={cat.id}>
                  
                {" "}
                <NavLink
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className={({ isActive }) =>
                    isActive ? "ActiveOption " : "Option "
                  } 
                >
                  {cat.description}
                </NavLink>{" "}
                
              </li>
            ))}
            <li className="navItem">
              <CartWidget />
            </li>
          </ul>
        </div>
      
    </nav>
  );
};

export default NavBar;
