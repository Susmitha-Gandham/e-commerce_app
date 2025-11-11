import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const [cartList, setcartList] = useState(props.cartList);

  function addtoCart(selectedItem) {
    const updatedCart = [...cartList, selectedItem];
    setcartList(updatedCart);
    props.setfinalCart(updatedCart);
    // console.log(`${selectedItem.productName} has been added to the cart`);
  }

  const productsList = [
    {
      productName: "Wireless Bluetooth Headphones",
      price: 2999,
      stock: 120,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1637780852590-8ab27248ec41?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    },
    {
      productName: "Ceramic Coffee Mug",
      price: 499,
      stock: 80,
      category: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1666445844615-0a3930270f13?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    },
    {
      productName: "Running Shoes",
      price: 3499,
      stock: 45,
      category: "Footwear",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    },
    {
      productName: "Leather Journal Notebook",
      price: 799,
      stock: 200,
      category: "Stationery",
      image:
        "https://images.unsplash.com/photo-1663809087021-21bdd11cad36?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    },
    {
      productName: "Smart Fitness Watch",
      price: 4999,
      stock: 65,
      category: "Wearables",
      image:
        "https://images.unsplash.com/photo-1669480380743-f76990b9bc44?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    },
  ];

  return (
    <div>
      {productsList.map((item, index) => (
        <div key={index}>
          <ProductCard item={item} addtoCart={addtoCart} />
        </div>
      ))}
    </div>
  );
};

export default Products;
