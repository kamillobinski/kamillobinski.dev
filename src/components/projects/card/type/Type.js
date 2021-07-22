import React from 'react';
import './type.css';

const Type = (props) => {
    return (
        <div className="type">
            <span>{props.value}</span>
        </div>
    )
}

export default Type;