import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product" >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name" ><Link to={"product/" + key} >{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <p><b>$ {price}</b></p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.showAddToCart && <button onClick={() => props.handleProduct(props.product)} className="addcart-btn" ><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;