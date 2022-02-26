import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { StateValue } from "./Stateprovider.js";
import { getCartTotal } from "./reducer.js";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = StateValue();

  const removeAll = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items )<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> this order contains a gift
            </small>
            <button onClick={() => history.push("/Payment")}>
              proceed to buy
            </button>
            <button onClick={removeAll}>remove all items</button>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Subtotal;
