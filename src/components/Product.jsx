import '../styles/product.css';
//import storeProducts from '../productData'
//import { useState } from 'react';

//console.log(storeProducts[0].src)

function Product(props) {

    const { product, onAdd } = props

    return(
        <div className="product-container">
            <img className="product-img" src={product.productImage}/>
            <h3>{product.productName}</h3>
            <button onClick={onAdd}>Add</button>
        </div>
    )
}



export default Product;