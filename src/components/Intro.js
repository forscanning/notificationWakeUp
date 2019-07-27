import React from 'react';
import Card from 'react-bootstrap/Card'
import img from '../img/test.JPG'

const Intro = () => {

    return (
        <Card className="mb-5 text-white bg-dark text-center">
            <Card.Body>
                <Card.Title className="text-center display-4">
                    Kilka słów na start
                </Card.Title>
                Skrypt ma na celu powiadomić nas kiedy pojawi się zgłoszenie z kategorii na które niezwłocznie musimy odpowiedzieć. Pomija takie zgłoszenia jak: Modemy GSM, DSL, Switch, JOBY, Brak połączenia. Dodatkowo zgłoszenia z wyżej wymienionych kategorii (oprócz JOBY, z czasem postaram się też to naprawić) są automatycznie pobierane "na twoje konto".
                Alarm wygląda tak:
            </Card.Body>
            <Card.Img variant="bottom" src={img} />
            <Card.Footer>Kliknięcie w szare pole spowoduje wyłączenie się alarmu</Card.Footer>
        </Card >
    );
}

export default Intro;