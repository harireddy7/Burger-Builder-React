import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {

    const controls = [
        {label: 'Meat', type: "meat"},
        {label: 'Salad', type: "salad"},
        {label: 'Cheese', type: "cheese"},
        {label: 'Bacon', type: "bacon"}
    ];

    return (
        <div className="BuildControls">
            <div>Price: <strong>{props.price.toFixed(2)}</strong></div>
            {controls.map(c => {
                return (
                    <BuildControl
                        key={c.label}
                        label={c.label}
                        onAdded={() => props.onAdded(c.type)}
                        onRemoved={() => props.onRemoved(c.type)}
                        disabled={props.disabledInfo[c.type]}
                    />
                )
            })}
            <button className="OrderButton"
                disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;