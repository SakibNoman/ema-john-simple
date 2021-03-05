import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    const totalPrice = cart.reduce((total, each) => total + each.price * each.quantity, 0);
    let shippingCost = 0;
    if (totalPrice >= 35) {
        shippingCost = 0;
    }
    else if (totalPrice >= 15) {
        shippingCost = 4.99;
    }
    else if (totalPrice > 0) {
        shippingCost = 9.99;
    }
    else {
        shippingCost = 0;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {Number(totalPrice.toFixed(2))}</p>
            <p><small>Shipping cost: {shippingCost}</small></p>
            <p><small>Tax+Vat: {Number((totalPrice * .1).toFixed(2))}</small></p>
            <p>Total prices: {(totalPrice + Number((totalPrice * .1))).toFixed(2)}</p>
            <Link to="/review" > <button className="addcart-btn" > Review Order </button> </Link>
        </div>
    );
};

export default Cart;