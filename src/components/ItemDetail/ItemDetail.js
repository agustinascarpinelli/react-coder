import "./ItemDetail.css";
import React, { useContext } from "react";
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
  cat
}) => {
  const { addItem, IsInCart, getQuantityProd } = useContext(CartContext);
  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const prodObj = { id, name, price, quantity: count };
    addItem(prodObj);
    setNotification("success", `Se agregaron ${count} ${name} correctamente`);
  };
  return (
    <div className="itemDetailContainer">
      <img src={img} alt={name} />
      <div className="itemDetail">
        <h5>{name}</h5>
        <p className="description">{description}</p>
        {cat==='detail'&&<>
        <p className="variety">Variedad: {variety}</p>
        <p className="weight">Peso: {weight} gr</p></>}
        <p className="price">$ {price}</p>
        <div>
          {false ? (
            <Link to="/cart" className="Option">
              Cart
            </Link>
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
