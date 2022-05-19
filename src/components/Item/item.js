import { Link } from "react-router-dom";
import "./item.css";
import React from "react";
const Item = ({ id, name, img, price, cat, stock }) => {
  return (
    <div>
      <div className="card shadow">
        <img className="card-img-top " src={img} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="info">Precio: ${price}</p>
          {cat === "detail" ? (
            <Link to={`/detail/${id}`} className="buttonDetail">
              Ver detalle
            </Link>
          ) : (
            <Link to={`/promo/${id}`} className="buttonDetail">
              Ver detalle
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
