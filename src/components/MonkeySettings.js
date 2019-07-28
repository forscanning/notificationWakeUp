import React from 'react';
import Card from 'react-bootstrap/Card'
import gif from '../img/instrukcja_monkey.gif'

const MonkeySettings = () => {

    return (
        <Card className="mb-5 text-white bg-dark">

            <Card.Body className="text-center">
                <Card.Title className="display-4">Uruchomienie skryptu</Card.Title>
                Aby uruchomić skrypt klikamy na suwak aby był zielony. Ważne aby oba skrypty nie były na raz uruchomione. Po wszystkim ustawiamy czas co ile się ma odświeżać i wszystko działa :)
            </Card.Body>
            <Card.Img variant="bottom" src={gif} />
            <Card.Footer className="bg-danger">WAŻNE!!! Nie wygaduj się koordynatorom o tym, to nasa słodka tajemnica. A i na koniec pracy wyłącz ten skrypt aby nie dzwonił (suwak musi być na szaro)</Card.Footer>
        </Card >
    );
}

export default MonkeySettings;