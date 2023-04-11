import React from 'react'
import '../styles/App.css';
import Navbar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Cart from './Cart'
import data from '../productData'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  function handleCartClick(addItem) {
      
      cartItems.push(addItem)
      setCartItems([...cartItems])
      //console.log(cartItems)
  }

  //console.log(cartItems)

  
    return (
    <Router >
        <div className="App">

          <Navbar />

          <Switch>

            <Route exact path='/Home'>
              <Home  data={data} onAdd={handleCartClick}/>
            </Route>
            
            <Route exact path='/Cart'>
              <Cart cartItems={cartItems} />
            </Route>

          </Switch>
            
            <Footer /> 

        </div>
      </Router>
    );
}

export default App;














// function handleCartClick(addItem, product) {
//   // const productExist = cartItems.find(item => item.id === product.id)
//   // if(productExist) {

//   //   setCartItems(cartItems.map(item => item.id === product.id ? {...productExist, quanity : productExist.quanity + 1}: item))
//   // } else {
    
//   //   setCartItems([...cartItems, {...product, quanity: 1}])
//   // }


//    cartItems.push(addItem)
//    setCartItems([...cartItems])
//    console.log(cartItems)
// }
