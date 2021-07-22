import React from 'react';
import './number.css';

const Number = (props) => {
    return (
        <div className="number">
            <span>{props.value}</span>
        </div>
    )
}

export default Number;