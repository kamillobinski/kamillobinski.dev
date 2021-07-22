import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import './item.css';

const Item = (props) => {
    if (props.type === "gmail") {
        return (
            <div className="item">
                <CopyToClipboard text={props.url}>
                    <span>
                        <props.svg height={props.height} fill={props.fill} />
                    </span>
                </CopyToClipboard>
            </div>
        )
    }
    return (
        <div className="item">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <props.svg height={props.height} fill={props.fill} />
            </a>
        </div>
    )
}

export default Item;