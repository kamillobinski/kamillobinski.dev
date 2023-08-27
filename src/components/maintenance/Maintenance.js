import React from 'react';
import './maintenance.css';
import Logo from '../../assets/images/maintenance/me.png';

const TITLE = 'Be right back.';
const SUBTITLE = 'I am making updates to the website. Check back soon.';

const Maintenance = () => {
    return (
        <div className={'maintenance'}>
            <div className={'content'}>
                <div className={'image'}>
                    <img src={Logo}  alt={'logo'}/>
                </div>
                <div className={'title'}>
                    <span>{TITLE}</span>
                </div>
                <div className={'subtitle'}>
                    <span>{SUBTITLE}</span>
                </div>
            </div>
        </div>
    )
}

export default Maintenance;