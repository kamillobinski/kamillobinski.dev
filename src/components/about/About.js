import React from 'react';
import Label from './label/Label';
import Text from './text/Text';
import "./about.css";

const LABEL = "ABOUT ME";
const TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <Label value={LABEL} />
                <Text value={TEXT} />
            </div>
        </div >
    )
}

export default About;