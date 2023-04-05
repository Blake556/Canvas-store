import { useState } from 'react';
import '../styles/home.css';
import Product from './Product'


function Home(props) {
    const { data } = props;

    const [cartItems, setCartItems] = useState([])

    function handleCartClick(item) {
        cartItems.push(item)
        setCartItems([...cartItems])
        console.log(cartItems)
    }

    return (
        <div className='home-body'>
            <h1 className='header'>Home page</h1>
            { data.map(item => {
                return (
                    <Product 
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        onAdd={handleCartClick}
                    />
                )
            }) }
        </div>
    );
}

export default Home;
