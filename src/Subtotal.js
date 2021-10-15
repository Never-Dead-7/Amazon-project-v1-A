import React from 'react'
import "./Subtotal.css"

function Subtotal() {
    return (
        <div className="subtotal">
            <p>Subtotal (0 items )<strong>0</strong></p>
            <small className="subtotal_gift">
                <input type="checkbox" /> this order contains a gift
            </small>
            <button>proceed to buy</button>
        </div>
    )
}

export default Subtotal
