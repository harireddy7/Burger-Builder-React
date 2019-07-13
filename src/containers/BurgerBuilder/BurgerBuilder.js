import React from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                meat: 2,
                cheese: 1,
                bacon: 1
            }
        }
    }
    

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
            </div>
        );
    }

}

export default BurgerBuilder;