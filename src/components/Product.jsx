import React from "react";
import "../styles/product.css";
//import storeProducts from '../productData'
import { useState } from "react";

function Product(props) {
  const { id, image, name, descrip, price } = props;

  const [addItem, setItem] = useState({
    id: id,
    key: id,
    image: image,
    name: name,
    descrip: descrip,
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
      descrip: descrip,
      price: price,
    });
    //event.preventDefault()
    //console.log(addItem)
  }



  return (
    <div className="product-container animation">
    <div className='product-img-container'>
      {<img className="product-details product-img animation" src={image} />}
    </div>
      {<h2 className="product-details">{name}</h2>}
      {<h5 className='product-details product-description'>{descrip}</h5>}
      {<h3 className="product-details product-price">{'$' + price}</h3>}
      <button onClick={addToCart} className="btn btn-secondary product-details addBtn">
        Buy
      </button>
    </div>
  );
}

export default Product;
