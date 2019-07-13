import React from 'react';
import PropTypes from 'prop-types';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    const ingredientComponents = Object.keys(props.ingredients).map(ig => {
        return [...Array(props.ingredients[ig])].map((_, indx) => {
            return <BurgerIngredient key={ig + indx} type={ig} />
        });
    });

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {ingredientComponents}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired
}

export default Burger;