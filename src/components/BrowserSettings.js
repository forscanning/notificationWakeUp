import React from 'react';
import Card from 'react-bootstrap/Card'
import gif from '../img/instrukcja.gif'

const BrowserSettings = () => {

    return (
        <Card className="mb-5 text-white bg-dark">

            <Card.Body className="text-center">
                <Card.Title className="text-center display-4">Ustawienia przeglądarki</Card.Title>
                Ustawienia są  proste, wystarczy zmienić dosłownie dwie opcje
            </Card.Body>
            <Card.Img variant="bottom" src={gif} />
        </Card >
    );
}

export default BrowserSettings;