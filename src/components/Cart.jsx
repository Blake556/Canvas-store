import React from "react";
//import { useState } from "react";
import "../styles/cart.css";
import johnWhick from "./../images/john-whick.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Cart(props) {

  //const [totalPrice, setTotalPrice] = useState([])

  let cart = props.cartItems;

  let itemQuanity =  cart.map(x => x.qty) 
  let total = itemQuanity.length && itemQuanity.reduce((accum, current) =>  accum + current)

  //console.log(total)
  //let grandTotal = total * 100
      
  let cartRowPrice = cart.map(g =>  g.qty * g.price)
  let cartTotal = cartRowPrice.length && cartRowPrice.reduce((accum, current) => accum + current)

  
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
                  <button onClick={() => props.handleDecrease(item)} className="btn btn-danger quanity-btn">-</button>
                  {/*  form-control when input was below */}
                  <p className="quanity-option ">{item.qty} </p>
                  {/* {console.log(item.qty.toString())} */}
                  <button onClick={() => props.handleIncrease(item)} className="btn btn-success quanity-btn">+</button>
                </div>
              </div>
              {/* The class i had for down below container prior to delet btn ( d-flex align-items-end justify-content-end ) */}
              <div className="col col-1  ">
                <DeleteForeverIcon
                  onClick={() => props.handleDelteItem(item)}
                  className="delete-btn"
                />
                
                <h4 className=" item-price">{total = '$' + item.price * item.qty}</h4>
              </div>
            </div>
          );
        })}

        {cart.length > 0 && (
          <div className="finalize-container">
            <div className="total-container d-flex justify-content-between">
              <h3 className="float-right">Total:</h3>
             
              <h3 className="">{'$' + cartTotal}</h3>
            </div>
            <div className="d-flex justify-content-end">
              <button onClick={() => props.purchaseItemsBtn()} className="btn btn-warning purchase-button">
                Purchase
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
