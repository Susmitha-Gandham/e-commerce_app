import React, { useState } from "react";

const ShoppingCart = (props) => {
  let totalPrice = 0;
  props.finalCart.map((item) => {
    totalPrice += item.price;
  });

  return (
    <div className="cart">
      <h2> Shopping Cart</h2>
      {props.finalCart.map((item, index) => (
        <div className="product">
          <h4 key={index}>{item.productName}</h4>
          <div className="row">
            <h4 key={index}>{item.price}</h4>
            <button onClick={() => props.removeItem(item)}>
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
      <h3>Total Price INR {totalPrice}</h3>
    </div>
  );
};
export default ShoppingCart;

//props.removeItem s a callback function as it will go back to the parent and will be executed in the parent scope.
