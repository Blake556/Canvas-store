import React from 'react'
import { useState } from 'react';
import '../styles/cart.css';
import johnWhick from './../images/john-whick.png'

function Cart(props) {
let cart = props.cartItems
  props.cartItems.map(item => {
    console.log(item)
  })
  // function cartItems() {
  //   props.added()
  // }
  
  //cartItems()
  //console.log(props.cartItems)

    return(
     
        
      <div className='cart-body'>
          <h1 className='cart-header'>Checkout</h1>
          <div className='container col-6 cart-container' >
          {/*{ props.cartItems.length === 0 && <div> No items in cart</div> }
         
       
      
         
        {    cart.map(item => {
          return (
              <div key={item.id} className='container col-8 cart-container' >
             
                <div className='row'>
                  <div className='col col-3'>
                    <img src={item.image} width='150px' />
                  </div>
                  <div className='col col-6'>
                    <h2>{item.name}</h2>
                    <div className='flex-box'>
                      <button className='btn btn-danger'>-</button>
                      <input className="quanity-option form-control "  type='number'></input>
                    </div>
                    <button className='btn btn-success'>+</button>
                  </div>
                  <div className='col col-3'>
                  <h4>{item.price}</h4>
                  </div>
                </div>
              </div>
          )
        })} */}

       
             
                <div className='row cart-item-container'>
                  <div className='col col-3 justify-content-start img-col'>
                    <img className='cart-item-img  d-flex justify-content-start' src={johnWhick} width='150px' />
                  </div>
                  <div className='col col-8 item-details-qunaity'>
                    <div className='d-flex align-items-start flex-column'>
                      <h4 className=''>John Whick</h4>
                      <h6>Canvas</h6>
                    </div>
                    <div className='d-flex'>
                      <button className='btn btn-danger quanity-btn'>-</button>
                      <input className="quanity-option form-control " maxlength="2" type='tel'></input>
                      <button className='btn btn-success quanity-btn'>+</button>
                    </div>
                  </div>
                  <div className='col col-1 d-flex  align-items-end justify-content-end  '>
                    <h4 className='item-price'>$100</h4>
                  </div>
                </div>
                
        </div>
           
                   
         
        </div>
         

    )
}

export default Cart;