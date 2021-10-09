import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
        <div className="home__container">
          <img className="home__image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

          <div className="home__row">
          <Product
          id="01"
          title="See U in Cby Ali Karim Sayed (Author)"
          price={4424.56}
          image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
          id="02"
          title="See U in Cby Ali Karim Sayed (Author)"
          price={4424.56}
          image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
          />
          <Product
          id="03"
          title="See U in Cby Ali Karim Sayed (Author)"
          price={4424.56}
          image="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
          />

          </div>
          <div className="home__row">
          <Product
          id="04"
          title="See U in Cby Ali Karim Sayed (Author)"
          price={4424.56}
          image="https://m.media-amazon.com/images/I/91dLTREdG1L._SL1500_.jpg"
          />
           <Product
          id="05"
          title="See U in Cby Ali Karim Sayed (Author)"
          price={4424.56}
          image="https://m.media-amazon.com/images/I/716WKStTjAL._SL1300_.jpg"
          />
          </div>
          <div className="home__row">
          <Product />
          </div>

        </div>  
      </div>
    )
}

export default Home
