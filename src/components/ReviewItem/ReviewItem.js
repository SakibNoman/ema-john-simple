import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key } = props.product;
    return (
        <div>
            <h4> {name} </h4>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.removeItem(key)} >Remove</button>
        </div>
    );
};

export default ReviewItem;