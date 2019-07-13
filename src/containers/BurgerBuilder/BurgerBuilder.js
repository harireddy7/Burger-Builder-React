import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0
            },
            totalPrice: 5,
            purchasable: false
        }
    }

    INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.4,
        meat: 1.3,
        bacon: 0.7
    };

    checkPurchasable(ingredients) {
        const sum = Object.keys(ingredients).map(ing => {
            return ingredients[ing];
        }).reduce(((sum, num) => sum + num), 0);

        this.setState({
            purchasable: sum > 0
        })
    }

    onIngredientAdded = type => {
        const currentIngredients = this.state.ingredients;
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: currentIngredients[type] + 1
        };
        const newPrice = this.state.totalPrice + this.INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.checkPurchasable(updatedIngredients);
    }

    onIngredientRemoved = type => {
        const currentIngredients = this.state.ingredients;
        if (currentIngredients[type] <= 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: currentIngredients[type] - 1
        };
        const newPrice = this.state.totalPrice - this.INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.checkPurchasable(updatedIngredients);
    }
    

    render() {

        const allIngredients = this.state.ingredients;
        let disabledInfo = {};
        for (let key in allIngredients) {
            disabledInfo[key] = allIngredients[key] <= 0;
        }

        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <BuildControls
                    onAdded={this.onIngredientAdded}
                    onRemoved={this.onIngredientRemoved}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </div>
        );
    }

}

export default BurgerBuilder;