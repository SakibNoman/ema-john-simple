import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    const handleProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    <ul>
                        {
                            products.map(each => <Product
                                product={each}
                                handleProduct={handleProduct}></Product>)
                        }
                    </ul>
                </div>
                <div className="cart-container">
                    <h4>This is Cart</h4>
                    <p>Total product: {cart.length}</p>
                </div>
            </div>

        </div>
    );
};

export default Shop;