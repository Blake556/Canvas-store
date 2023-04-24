import React from "react";
import "../styles/App.css";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import data from "../productData";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleCartClick(addItem) {
    cartItems.push(addItem);
    setCartItems([...cartItems]);
  }

  function handleIncrease(addItem) {
    //console.log(addItem);
    const productExist = cartItems.find((item) => item.id === addItem.id);
    //let productPrice = productExist.qty  * productExist.price
    //console.log(productExist);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === addItem.id && productExist.qty < 10

            ? { ...productExist, qty: productExist.qty + 1 }
            : item ,

            //console.log(productExist),
            //console.log(productExist.qty * productExist.price)
        )
        

      );
      
      

    }
    
   
  }

  function handleDecrease(addItem) {
    const productExist = cartItems.find((item) => item.id === addItem.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === addItem.id && productExist.qty > 0
            ? { ...productExist, qty: productExist.qty - 1 }
            : item, productExist.qty * productExist.price
        )
      );
    }
  }

  function handleDelteItem(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    //console.log(productExist);
  }


  // function updateTotal(addItem) {
  //   const productExist = cartItems.find((item) => item.id === addItem.id)
  //   console.log(typeof productExist.price)
  //   console.log(productExist)
    
  //   setCartItems(
  //     cartItems.map(item => item.id === addItem.id &&  productExist.qty * productExist.price)
      
  //   )
  // }

  function total() {
    cartItems.map()
  }


  function purchaseItemsBtn() {
    setCartItems(cartItems.filter((item) => item.length));
    setTimeout(() => {
      alert("Order placed, Thank you!");
    }, 500);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/Home">
            <Home data={data} onAdd={handleCartClick} />
          </Route>

          <Route exact path="/Cart">
            <Cart
              cartItems={cartItems}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              handleDelteItem={handleDelteItem}
              purchaseItemsBtn={purchaseItemsBtn}
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
