import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './label.css';

const Label = (props) => {
    return (
        <Parallax className="label" x={[100, -80]}>
            <span>{props.value}</span>
        </Parallax>
    )
}

export default Label;