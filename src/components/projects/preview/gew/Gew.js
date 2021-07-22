import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './gew.css';

const Gew = (props) => {
    return (
        <div className="gew-preview" id="gew">
            <div className="line">
                <Parallax className="medium" y={[30, 40]}>
                    <img src={props.img2} alt={props.img3} />
                </Parallax>
            </div>
            <div className="line">
                <Parallax className="large" y={[80, 0]}>
                    <img src={props.img1} alt={props.img1} />
                </Parallax>
                <Parallax className="large" y={[40, 30]}>
                    <img src={props.img3} alt={props.img3} />
                </Parallax>
            </div>
        </div>
    )
}

export default Gew;