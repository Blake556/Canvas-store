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
     
        // <div className='cart-body'>
        //     {/* { cartItems.length === 0 && <div>Cart is Empty</div> } */}
        // </div>
      <div>
          <h1>Cart page</h1>
          <div className='cart-body'>
          { props.cartItems.length === 0 && <div> No items in cart</div> }
          </div>
       
      
          <div className='cart-body'>
        {    cart.map(item => {
          return (
              <div key={item.id} className='cart-container' >
                <img src={item.image}/>
                <h2>{item.name}</h2>
                <h4>{item.price}</h4>
              </div>
          )
        })}
           
                    {/* <div className='cart-container'>
                      <img src={johnWhick} width="200px"></img>
                      <span>John Whick canvas</span>
                      
                    </div> */}
          </div>
       </div>
         

    )
}

export default Cart;