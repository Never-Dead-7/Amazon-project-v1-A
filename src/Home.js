import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id= "01"
            title="See U in Cby Ali Karim Sayed (Author)"
            price={20}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id= "02"
            title="Apple watch"
            price={20}
            image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
          />
          <Product
            id= "03"
            title="iphone 13 pro max"
            price={35}
            image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id= "04"
            title="Samsung Galaxy s21 ultra"
            price={46}
            image="https://m.media-amazon.com/images/I/91dLTREdG1L._SL1500_.jpg"
          />
          <Product
            id= "5"
            title="Led Monitor"
            price={48}
            image="https://m.media-amazon.com/images/I/716WKStTjAL._SL1300_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id= "6"
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey"
            price={49}
            image="https://images-eu.ssl-images-amazon.com/images/I/313CFbI-YjL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
