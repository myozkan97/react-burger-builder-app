import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
        })


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your order:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};


export default orderSummary; 