import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product" >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name" >{name}</h4>
                <p><small>by: {seller}</small></p>
                <p><b>$ {price}</b></p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick={() => props.handleProduct(props.product)} className="addcart-btn" ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;