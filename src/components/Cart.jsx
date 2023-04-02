import { useState } from 'react';
import '../styles/cart.css';
//import johnWhick from './john-whick.png'

function Cart(props) {
  
    const {cartItems} = props

    return(
       <div className='cart-body'>
        { cartItems.length === 0 && <div>Cart is Empty</div> }
       </div>

        // <div className='cart-body'>
        //     <h1>Cart page</h1>
        //     <div className='cart-container'>
        //        <img src={johnWhick} width="200px"></img>
        //        <span>John Whick canvas</span>
               
        //     </div>
        // </div>
        
    )
}

export default Cart;