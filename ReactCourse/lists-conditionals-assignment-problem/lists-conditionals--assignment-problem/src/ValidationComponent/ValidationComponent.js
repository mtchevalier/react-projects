import React from 'react';

const validationComponent = (props) => {
    let validationMsg = null;

    if(props.userInputLength <= 4) {
        validationMsg = (
            <div>
                <h1>Text too short</h1>
            </div>
        );
    } else {
        validationMsg = (
            <div>
                <h4>Text long enough</h4>
            </div>
        );
    }

    return(
        <div>
            {validationMsg}
        </div>
    )
};

export default validationComponent;