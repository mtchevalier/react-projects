import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const StyledCard = styled.div`
    background-color: aquamarine;
    border: 2px dotted slate;
    box-shadow: 5px 10px 18px red;
    padding: 1rem;
    border-radius: 5px;    
    height: auto;
    margin: 1rem;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
`;

const card = ( props ) => {
    return(
        <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle>{props.tags}</Card.Subtitle>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default card;