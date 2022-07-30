import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Banking, stylish kitchen mixer with K-beater, Dough Hook and whisk, 5 litre, Glass Bowl"
            price={239.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart speaker with Aleza, Charcoal Fabric"
            price={98.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="New Apple iPad pro (12.9 inch, Wifi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
