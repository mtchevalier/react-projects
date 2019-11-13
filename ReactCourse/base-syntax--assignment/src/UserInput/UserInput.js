import React from 'react';
import './UserInput.css';

const input = (props) => {
    return(
        <input type="text" onChange={props.changed} value={props.username}></input>
    )
};

export default input;