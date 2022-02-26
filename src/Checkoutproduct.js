import React from "react";
import { StateValue } from "./Stateprovider";

const Checkoutproduct = ({id , image, price, title }) => {
  const [{ cart }, dispatch] = StateValue();

  const removeItems = () => {
    dispatch({
      type: "REMOVES_ITEMS",
      payload: id,
    });
  };
  return (
    <>
      <div>
        <img src={image} alt="logo" />
      </div>
      <div className="right_list">
        <p>{title}</p>
        <strong>₹ {price}</strong>
        <button className="btnrfc" onClick={removeItems}>
          Remove From Cart
        </button>
      </div>
    </>
  );
};

export default Checkoutproduct;
