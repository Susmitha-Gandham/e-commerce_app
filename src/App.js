import "./App.css";
import React, { useState } from "react";
import ShoppingCart from "./Components/ShoppingCart";
import Products from "./Components/Products";

function App() {
  const [finalCart, setfinalCart] = useState([]);
  console.log(finalCart);
  const removeItem = (item) => {
    console.log(item);
    const updatedCart = finalCart.filter(
      (product) => item?.productName !== product?.productName
    );
    setfinalCart(updatedCart);
  };
  return (
    <>
      <h2 style={{ color: "blue", textAlign: "center" }}>Coco Station</h2>
      <div className="mainWrapper">
        <div style={{ flex: 1, alignItems: "center" }}>
          <Products setfinalCart={setfinalCart} cartList={finalCart} />
        </div>
        <div style={{ flex: 1, alignItems: "center" }}>
          <ShoppingCart finalCart={finalCart} removeItem={removeItem} />
        </div>
      </div>
    </>
  );
}

export default App;

//rafce -boilterplate
//clg - console.log
