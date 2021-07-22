import React from 'react';

const style = {
    width: "fit-content",
    position: "fixed",
    left: 0,
    top: 0
}

const ScrollMini = (props) => {
    return (
        <div style={style}>
            <span>{props.scrollPos}</span>
            <br />
            <span style={{ color: "grey" }}>{props.scrollLimit}</span>
        </div>
    )
}

export default ScrollMini;