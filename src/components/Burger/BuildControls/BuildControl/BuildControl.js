import React from 'react';
import './BuildControl.css'

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <label className="Label">{props.label}</label>
            <button className="Less" onClick={props.onRemoved} disabled={props.disabled}>-</button>
            <button className="More" onClick={props.onAdded}>+</button>
        </div>
    );
};

export default BuildControl;