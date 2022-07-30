import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Beauty/LipstickWeek/pcheader.jpg"
          alt=""
        />
        <div>
          <h3>Hello, { user?.email}</h3>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/*checkout product*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal /> <h2>The subtotal will go here</h2>
      </div>
      <h1>Smash the like button</h1>
    </div>
  );
}

export default Checkout;
