import React, { useState } from "react";
import "../styles/product.css";

function Product(props) {
  const { id, image, name, descrip, price } = props;

  // Add state to keep track of hover state
  const [isHovered, setIsHovered] = useState(false);

  const [BtnClicked, setBtnClicked] = useState(false);

  function addToCart() {
    setBtnClicked(true);

    props.continueToPass({
      id: id,
      key: id,
      image: image,
      name: name,
      descrip: descrip,
      price: price,
      qty: 1,
    });
  }

  return (
    <div className="product-container">
      <div
        className="product-img-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="product-details product-img"
          src={image}
          alt={name}
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>
      <h3 className="product-details product-name">{name}</h3>
      <h5 className="product-details product-description">{descrip}</h5>
      <h3 className="product-details product-price">{"$" + price}</h3>

      {BtnClicked ? (
        <span className="add-msg">Added to Cart</span>
      ) : (
        <button
          onClick={addToCart}
          className="btn btn-secondary product-details addBtn"
        >
          Buy
        </button>
      )}
    </div>
  );
}

export default Product;
