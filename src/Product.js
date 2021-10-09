import React from 'react'
import './Product.css';

function product({id,title,price,image}) {
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>

            <p className="product_price">
            <bold>₹</bold>
            <strong>{price}</strong>
            </p>
                
             <img className='product_image' src={image} alt="asd" /> 
            </div>
            <button className='product_button'>Add to Cart</button>  
        </div>
    )
}

export default product
