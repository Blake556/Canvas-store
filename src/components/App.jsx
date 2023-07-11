import React from "react";
import "../styles/App.css";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import data from "../productData";
import { BrowserRouter as Router, Route, Routes, Navigate, Switch, Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleCartClick(addItem) {
    const productExist = cartItems.find((item) => item.id === addItem.id);
    console.log(productExist);

    if (!cartItems.includes(productExist)) {
      cartItems.push(addItem);
    } else {
      alert("Item has already been added");
    }
    setCartItems([...cartItems]);
  }

  function handleIncrease(addItem) {
    const productExist = cartItems.find((item) => item.id === addItem.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === addItem.id && productExist.qty < 9
            ? { ...productExist, qty: productExist.qty + 1 }
            : item
        )
      );
    }
  }

  function handleDecrease(addItem) {
    const productExist = cartItems.find((item) => item.id === addItem.id);
    if (productExist) {
      setCartItems(
        cartItems.map(
          (item) =>
            item.id === addItem.id && productExist.qty > 1
              ? { ...productExist, qty: productExist.qty - 1 }
              : item,
          productExist.qty * productExist.price
        )
      );
    }
  }

  function handleDelteItem(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  }

  function purchaseItemsBtn() {
    setCartItems(cartItems.filter((item) => item.length));
    setTimeout(() => {
      alert("Order placed, Thank you!");
    }, 200);
  }

  return (
  
   <Router>
   <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Navigate to="/Home"/> } />
        <Route path="Home" element={ <Home data={data} onAdd={handleCartClick} /> } />
        <Route path="Cart" element={<Cart cartItems={cartItems} handleDecrease={handleDecrease}
          handleIncrease={handleIncrease} handleDelteItem={handleDelteItem} purchaseItemsBtn={purchaseItemsBtn} /> } />
      </Routes>
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
