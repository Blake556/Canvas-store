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
  }
   //console.log(cartItems)


  function handleQuanityChange(product) {
    const productExist = cartItems.find(item => item.id === product.id )

    if (productExist) {
      setCartItems(cartItems.map(item =>
         item.id === product.id ? {...productExist, qty: productExist.qty + 1 } : item))
    } else {
      setCartItems([...cartItems, {...product, qty: 1 }])
    }
    console.log('Hello?')
  }



  function handleDelteItem(product) {
    const productExist = cartItems.find(item => item.id === product.id )
    if(productExist) {
      setCartItems(
        cartItems.filter(item => item.id !== product.id)
      )
    }
    console.log(productExist)
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
              <Cart 
                cartItems={cartItems}  
                onAdd={handleCartClick} 
                onQtyChange={handleQuanityChange} 
                handleDelteItem={handleDelteItem} 
              />
            </Route>

          </Switch>
            
            <Footer /> 

        </div>
      </Router>
    );
}

export default App;













// function handleCartClick(addItem) {
//   const productExist = cartItems.find(item => item.id === addItem.id )
//   if (productExist) {
//     // cartItems.push(addItem)
//     // setCartItems([...cartItems])
    
//     setCartItems(cartItems.map(item =>
//        item.id === addItem.id ? {...productExist, qty: productExist.qty + 1 } : item))
//   } else {
//     setCartItems([...cartItems, {...addItem, qty: 1 }])
//   }
//    //console.log(cartItems)
// }

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
