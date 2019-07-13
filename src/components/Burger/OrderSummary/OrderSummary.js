import React from 'react';

const OrderSummary = ({ingredients}) => {

    const summary = Object.keys(ingredients).map(ing => {
        return <li key={ing}><span style={{ textTransform: 'capitalize'}}>{ing}: </span>{ingredients[ing]}</li>
    })

    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients: </p>
            {summary}
            <p>Continue to Chekout?</p>
        </div>
    );
};

export default OrderSummary;