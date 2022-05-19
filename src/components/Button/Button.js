import React, { useEffect, useState } from "react";
import "./Button.css";
const ButtonCount = ({ onConfirm, initial = 1, stock = 0 }) => {
  const [count, setCount] = useState(initial);
  useEffect(() => {
    setCount(initial);
  }, [initial]);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (stock === 0) {
    return (
      <button className="Option" disabled>
        No hay stock
      </button>
    );
  }
  return (
    <div className="buttonCount">
      <div className="counter">
        <button className="decrement" onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button className="increment" onClick={increment}>
          +
        </button>
      </div>
      <button className="confirm" onClick={() => onConfirm(count)}>
        Add to cart
      </button>
    </div>
  );
};
export default ButtonCount;
