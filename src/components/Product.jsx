import React from "react";
import "../styles/product.css";
//import storeProducts from '../productData'
import { useState } from "react";

function Product(props) {
  const { id, image, name, price } = props;

  const [addItem, setItem] = useState({
    id: id,
    key: id,
    image: image,
    name: name,
    price: price,
    qty: 1,
  });

  function addToCart() {
    props.continueToPass(addItem);
    setItem({
      id: id,
      key: id,
      image: image,
      name: name,
      price: price,
    });
    //event.preventDefault()
    //console.log(addItem)
  }



  return (
    <div className="product-container">
      {<img className="product-details product-img" src={image} />}
      {<h2 className="product-details">{name}</h2>}
      {<h3 className="product-details product-price">{'$' + price}</h3>}
      <button onClick={addToCart} className="btn btn-secondary product-details">
        Add
      </button>
    </div>
  );
}

export default Product;
