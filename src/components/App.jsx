import '../styles/App.css';
import Navbar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import Cart from './Cart'
import data from '../productData'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react';

function App(props) {
 const { image, name, price } = data
 
  const [shoppingCart, setCart] = useState([])

  // function handleCartClick(cartItems) {
  //   setCartItems(
  //     console.log('hello')
  //   )
   
  // }

  console.log(Home.props)

  function cartaDta(ca) {

  }



  return (
   <Router>
      <div className="App">
          <Navbar />
        <Switch>

          <Route exact path='/Home'>
            <Home  data={data}/>
          </Route>
          
          <Route exact path='/Cart'>
           {/* <Cart sendCartItems={shoppingCart => setCart(shoppingCart)} /> */}
          </Route>

        </Switch>
          
          <Footer /> 
      </div>
    </Router>
  );
}

export default App;
