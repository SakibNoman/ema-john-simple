import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Cart = (props) => {

    const { item } = useParams();

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

    const history = useHistory()

    const handleProceedCheckout = () => {
        history.push("/shipment")
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {Number(totalPrice.toFixed(2))}</p>
            <p><small>Shipping cost: {shippingCost}</small></p>
            <p><small>Tax+Vat: {Number((totalPrice * .1).toFixed(2))}</small></p>
            <p>Total prices: {(totalPrice + Number((totalPrice * .1))).toFixed(2)}</p>
            {
                !item && <Link to="/review/item" > <button className="addcart-btn" > Review Order </button> </Link>
            }
            {
                item && <button onClick={handleProceedCheckout} className="addcart-btn" > Proceed Checkout </button>
            }
        </div>
    );
};

export default Cart;