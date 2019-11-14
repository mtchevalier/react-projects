import React from 'react';

const output = (props) => {
    const style = {
        border: '2px green dotted'
    };
    return(
        <div>
            <p style={style}>Earthworm</p>
            <p>{props.username}</p>
        </div>
    )
};

export default output;