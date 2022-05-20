import "./ItemDetail.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ButtonCount from "../Button/Button";
import { useNotification } from "../../notification/Notification";

const ItemDetail = ({
  id,
  name,
  img,
  description,
  variety,
  weight,
  price,
  stock,
  cat,
}) => {
  const { addItem, IsInCart, getQuantityProd } = useContext(CartContext);
  const [added, setAdded]=useState(false)
  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const prodObj = { id, name, price, quantity: count };
    addItem(prodObj);
    setNotification("success", `Se agregaron ${count} ${name} correctamente`)
    setAdded(true);
  };
  return (
    <div className="itemDetailContainer">
      <img src={img} alt={name} />
      <div className="itemDetail">
        <h5>{name}</h5>
        <p className="description">{description}</p>
        {cat === "detail" && (
          <>
            <p className="variety">Variedad: {variety}</p>
            <p className="weight">Peso: {weight} gr</p>
          </>
        )}
        <p className="price">$ {price}</p>
        <div>
          {added ? (<>
            <Link to="/cart" className="back">
              Ver carrito
            </Link> 
            {cat==='detail' ? <Link to ='/list' className='back'>Seguir comprando</Link> : <Link to ='/promo' className='back'>Seguir comprando</Link>} </>
          ) : (
            <ButtonCount
              onConfirm={handleAdd}
              stock={stock}
              initial={getQuantityProd(id)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
