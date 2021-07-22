import React from 'react';
import './text.css';

const Text = (props) => {
    return (
        <div className="text">
            <span>{props.value}</span>
        </div>
    )
}

export default Text;