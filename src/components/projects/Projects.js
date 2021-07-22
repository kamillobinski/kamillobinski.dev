import React from 'react';
import Card from './card/Card';
import Shelty from './preview/shelty/Shelty';
import Gew from './preview/gew/Gew';
import ClassroomPros from './preview/classroom-pros/ClassroomPros';

// Shelty
import SheltyMacAdmin from '../../assets/images/shelty/shelty-mac-admin.png';
import SheltyIphoneAnimals from '../../assets/images/shelty/shelty-iphone-animals.png';
import SheltyIpadAnimals from '../../assets/images/shelty/shelty-ipad-animals.png';
// GEW
import GewMac from '../../assets/images/gew/gew-mac.png';
import GewIphone from '../../assets/images/gew/gew-iphone.png';
import GewIpad from '../../assets/images/gew/gew-ipad.png';
// Classroom-Pros
import CpMacHomepage from '../../assets/images/classroom-pros/cp-mac-homepage.png';
import CpIpadSignIn from '../../assets/images/classroom-pros/cp-ipad-signin.png';
import CpIpadPlan from '../../assets/images/classroom-pros/cp-ipad-plan.png';

import './projects.css';

var CARDS = [
    {
        Number: "01",
        Title: "Shelty",
        Description: "A dynamic web application for an animal shelter with an extensive admin panel, public subpages and own customizable blog.",
        Type: "WEB APP"
    },
    {
        Number: "02",
        Title: "GEW 2020",
        Description: "Website created in three days for the Mazovian State University on the occasion of the Global Entrepreneurship Week.",
        Type: "WEBSITE"
    },
    {
        Number: "03",
        Title: "Clasroom Pros",
        Description: "Website for creating and managing school timetables.",
        Type: "WEB APP"
    },
    {
        Number: "",
        Title: "",
        Description: "",
        Type: ""
    },
];

var content = "";

const Projects = (props) => {

    const toggleCardVisibility = () => {
        if (props.scrollPos > (props.scrollLimit / 3.2) && props.scrollPos < (props.scrollLimit / 1.5)) {
            changeCard();
            return { visibility: "visible" };
        } else {
            changeCard();
            return { visibility: "hidden" };
        }
    }

    const changeCard = () => {
        var sheltyStart = (props.scrollLimit / 3.2) - 200;
        var gewStart = (props.scrollLimit / 2.12) - 200;
        var cpStart = (props.scrollLimit / 1.57) - 200;

        if (props.scrollPos >= sheltyStart && props.scrollPos < gewStart) {
            content = CARDS[0];
        } else if (props.scrollPos >= gewStart && props.scrollPos > sheltyStart && props.scrollPos < cpStart) {
            content = CARDS[1];
        } else if (props.scrollPos >= cpStart && props.scrollPos > gewStart && props.scrollPos > sheltyStart && props.scrollPos < (props.scrollLimit / 1.5)) {
            content = CARDS[2];
        } else {
            content = CARDS[3];
        }
    }

    return (
        <div className="projects">
            <div className="inner" style={toggleCardVisibility()}>
                <Card content={content} number={content.Number} title={content.Title} description={content.Description} type={content.Type} />
            </div>
            <Shelty img1={SheltyMacAdmin} img2={SheltyIphoneAnimals} img3={SheltyIpadAnimals} />
            <Gew img1={GewMac} img2={GewIphone} img3={GewIpad} />
            <ClassroomPros img1={CpMacHomepage} img2={CpIpadSignIn} img3={CpIpadPlan} />
        </div >
    )
}

export default Projects;