import React from 'react';
import { Github, Linkedin, Twitter, Gmail } from '../../assets/icons/Icons';
import Item from './item/Item';
import './social.css';

const HEIGHT = "40px";
const FILL = "rgb(51, 51, 51)";

const GITHUB_URL = "https://github.com/kamillobinski";
const LINKEDIN_URL = "https://www.linkedin.com/in/kamillobinski/?locale=en_US";
const TWITTER_URL = "https://twitter.com/kamillobinski";
const GMAIL_URL = "kamillobinski@gmail.com";

const Social = () => {
    return (
        <div className="social">
            <div className="container">
                <Item svg={Gmail} type="gmail" url={GMAIL_URL} height={HEIGHT} fill={FILL} />
                <Item svg={Github} url={GITHUB_URL} height={HEIGHT} fill={FILL} />
                <Item svg={Linkedin} url={LINKEDIN_URL} height={HEIGHT} fill={FILL} />
                <Item svg={Twitter} url={TWITTER_URL} height={HEIGHT} fill={FILL} />
            </div>
        </div>
    )
}

export default Social;