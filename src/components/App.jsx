import React from "react";
import "../styles/App.css";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import data from "../productData";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
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
        <Route path="/" element={<Navigate to="/Home" />} />
          <Route
            path="/Home"
            element={<Home data={data} onAdd={handleCartClick} />}
          />
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cartItems}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                handleDelteItem={handleDelteItem}
                purchaseItemsBtn={purchaseItemsBtn}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
