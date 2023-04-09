import { useState } from 'react';
import '../styles/cart.css';
import johnWhick from './../images/john-whick.png'

function Cart(props) {


  // function cartItems(event) {
  //   props.onAdd()
  // }
   //console.log(props.added))

    return(
        // <div className='cart-body'>
        //     {/* { cartItems.length === 0 && <div>Cart is Empty</div> } */}
        // </div>

        <div className='cart-body'>
            <h1>Cart page</h1>
            <div className='cart-container'>
               <img src={johnWhick} width="200px"></img>
               <span>John Whick canvas</span>
               
            </div>
         </div>

    )
}

export default Cart;