import '../styles/App.css';
import Navbar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Cart from './Cart'
import storeProducts from '../productData'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const {products} = storeProducts
  const [cartItems, setCartItems] = useState([])

  function onAdd(products) {
    //console.log('Add me')
    const exist = cartItems.find(item => {
      return item.id === products.id
    })
    if(exist) {
      setCartItems( cartItems.map(item => {
        return item.id === products.id ? {...exist, qty: exist.qty + 1} : item
      }))
    } else {
      setCartItems( ...cartItems, { ...products, qty: 1})
    }

    setCartItems( cartItems.map(item => {
      console.log(item + 'got clicked')
    }))
  }




  return (
   <Router>
    <div className="App">
    <Navbar />
    <Switch>

      <Route exact path='/Home'>
        <Home products={products}  onAdd={onAdd} />
       
      </Route>
      
      <Route exact path='/Cart'>
        <Cart  onAdd={onAdd} />
      </Route>

    </Switch>
      
       <Footer /> 
    </div>
    </Router>
  );
}

export default App;
