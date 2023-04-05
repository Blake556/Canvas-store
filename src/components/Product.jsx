import '../styles/product.css';
//import storeProducts from '../productData'
//import { useState } from 'react';

//console.log(storeProducts[0].src)

function Product(props) {

const { image, name, price } = props

function handleClick() {
    props.onAdd(props)
}

// function onAdd(event) {
//     const click = event.target.parentNode
//     console.log(click)
// }
 

    return(
        <div className="product-container">
            { <img className="product-details product-img" src={image}/> }
            { <h2 className='product-details'>{name}</h2> }
            { <h3 className='product-details product-price'>{price}</h3>}
            <button onClick={handleClick} className='product-details'>Add</button>
        </div>
    )
}



export default Product;