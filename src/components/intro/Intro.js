import React from 'react';
import Name from './name/Name';
import Title from './title/Title';
import './intro.css';

const NAME = "Kamil Łobiński";
const TITLE = "COMPUTER SCIENCE GRADUATE";

const Intro = () => {
    return (
        <div className="intro">
            <div className="container">
                <Name value={NAME} />
                <Title value={TITLE} />
            </div>
        </div>
    )
}

export default Intro;