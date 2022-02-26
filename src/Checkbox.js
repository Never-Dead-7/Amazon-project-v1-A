import React, { useEffect, useState } from "react";
import "./Checkbox.css";
import Subtotal from "./Subtotal.js";
import { StateValue } from "./Stateprovider.js";
import Checkoutproduct from "./Checkoutproduct";

function Checkbox() {
  const [{ cart, user }, dispatch] = StateValue();
  const [checkoutright, setCheckoutright] = useState(false);

  // useEffect(() => {
  //   const sRightnav = () => {
  //     if (window.scrollY >= 400) {
  //       setCheckoutright(true);
  //     } else {
  //       setCheckoutright(false);
  //     }
  //   };
  //   window.addEventListener("scroll", sRightnav);
  // }, [setCheckoutright]);

  return (
    <div className="checkout">
      <div className="checkout--left">
        <img
          className="checkout--adv"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png"
          alt="adv"
        />
        <h3 className="checkout--title">
          <span>Hello, {user?.email}, {user?.uid}</span>
          <span>Your Shopping Details</span>
          </h3>
        <div className="product_list">
          {cart.map((prodinfo, imageIndex) => {
            const { image, price, title, id } = prodinfo;
            return (
              <article className="product_list_items" key={imageIndex}>
                <Checkoutproduct
                  image={image}
                  price={price}
                  title={title}
                  id={id}
                />
              </article>
            );
          })}
        </div>
      </div>
      <div className={checkoutright ? "active" : "checkoutright"}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkbox;
