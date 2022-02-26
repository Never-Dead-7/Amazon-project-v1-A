import React, { useState } from "react";
import "./Product.css";
import { StateValue } from "./Stateprovider.js";

function Product({id,title, price, image }) {
  const [{ cart }, dispatch] = StateValue();

  const addToBasket = () => {
    dispatch({
      type: "Add_To_Cart",
      item: {
        id:id,
        title: title,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p> {title} </p>
        <p className="product_price">
          <b> ₹ </b> <strong> {price} </strong>
        </p>
        <img className="product_image" src={image} alt="asd" />
      </div>
      <div className="btn_R_A">
        <button className="product_button" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
