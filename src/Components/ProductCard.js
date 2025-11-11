import React from "react";
import "./styles.css";
const ProductCard = (props) => {
  return (
    <div className="wrapper">
      <div className="imageWrapper">
        <img
          className="photo"
          src={props.item.image}
          alt={props.item.productName}
        />
        <h4>{props.item.productName}</h4>
      </div>
      <div className="imageWrapper">
        <h5>{props.item.price} INR</h5>
        <button onClick={() => props.addtoCart(props.item)}>Add To Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
