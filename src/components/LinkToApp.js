import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const LinkToApp = ({ src, name, style, link }) => {

    const handleClick = link => {
        window.open(link, '_blank');
    }


    return (
        <Card style={style}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button onClick={() => handleClick(link)} variant="primary">Zainstaluj</Button>
            </Card.Body>
        </Card >
    );
}

export default LinkToApp;