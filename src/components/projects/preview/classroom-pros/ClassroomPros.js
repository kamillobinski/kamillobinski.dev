import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './classroompros.css';

const ClassroomPros = (props) => {
    return (
        <div className="cp-preview" id="cp">
            <div className="line">
                <Parallax className="large" y={[30, 80]}>
                    <img src={props.img1} alt={props.img1} />
                </Parallax>
            </div>
            <div className="line">
                <Parallax className="medium" y={[80, 0]}>
                    <img src={props.img3} alt={props.img3} />
                </Parallax>
                <Parallax className="small" y={[40, 30]}>
                    <img src={props.img2} alt={props.img2} />
                </Parallax>
            </div>
        </div>
    )
}

export default ClassroomPros;