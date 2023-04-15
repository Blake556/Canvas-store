import React from "react";
import { useState } from "react";
import "../styles/cart.css";
import johnWhick from "./../images/john-whick.png";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Cart(props) {
  let cart = props.cartItems;
  props.cartItems.map((item) => {
    console.log(item);
  });
  // function cartItems() {
  //   props.added()
  // }

  //cartItems()
  //console.log(props.cartItems)

  function deleteItem() {
    props.handleDelteItem()
  }
 
  return (
    <div className="cart-body">
      <h1 className="cart-header">Checkout</h1>
      <div className="container col-6 cart-container">
        {cart.length === 0 && <div> No items in cart</div>}

        {cart.map((item) => {
          return (
            <div key={item.id} className="row cart-item-container">
              <div className="col col-3 justify-content-start img-col">
                <img
                  className="cart-item-img  d-flex justify-content-start"
                  src={item.image}
                  width="150px"
                />
              </div>
              <div className="col col-8 item-details-qunaity">
                <div className="d-flex align-items-start flex-column">
                  <h4 className="">{item.name}</h4>
                  <h6>Canvas</h6>
                </div>
                <div className="d-flex">
                  <button className="btn btn-danger quanity-btn">-</button>
                  <input
                    className="quanity-option form-control "
                    maxlength="2"
                    type="tel"
                  ></input>
                  <button className="btn btn-success quanity-btn">+</button>
                </div>
              </div>
          {/* The class i had for down below container prior to delet btn ( d-flex align-items-end justify-content-end ) */}
              <div className="col col-1  ">
                  <button onClick={deleteItem} className='delete-item '>{<DeleteForeverIcon className='delete-btn'/>}</button>
                  <h4 className="item-price">{item.price}</h4>
              </div>
            </div>
          );
        })}
        
        {cart.length > 0 &&
         <div className='finalize-container'>
          <div className='total-container d-flex justify-content-between'>
            <h3 className='float-right'>Total:</h3>
            <h3 className=''>$200</h3>
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-warning purchase-button'>Purchase</button>
          </div>
        </div>  }
        

        {/* <div className="row cart-item-container">
              <div className="col col-3 justify-content-start img-col">
                <img
                  className="cart-item-img  d-flex justify-content-start"
                  src={johnWhick}
                  width="150px"
                />
              </div>
              <div className="col col-8 item-details-qunaity">
                <div className="d-flex align-items-start flex-column">
                  <h4 className="">John Whick</h4>
                  <h6>Canvas</h6>
                </div>
                <div className="d-flex">
                  <button className="btn btn-danger quanity-btn">-</button>
                  <input
                    className="quanity-option form-control "
                    maxlength="2"
                    type="tel"
                  ></input>
                  <button className="btn btn-success quanity-btn">+</button>
                </div>
              </div>
              <div className="col col-1 d-flex  align-items-end justify-content-end  ">
                <h4 className="item-price">$100</h4>
              </div>
            </div>

        <div className='finalize-container'>
          <div className='total-container d-flex justify-content-between'>
            <h3 className='float-right'>Total:</h3>
            <h3 className=''>$200</h3>
          </div>
          <div className='d-flex justify-content-end'>
            <button className='btn btn-warning purchase-button'>Purchase</button>
          </div>
        </div>
      */}
      </div>
    </div> 
  );
}

export default Cart;
