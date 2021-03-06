import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-4">
            <Navbar.Brand href="#home">Notyfication Wake Up</Navbar.Brand>
            <div className="d-none">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#1">Jak zacząć</Nav.Link>
                        <Nav.Link href="#2">Pobranie skryptu</Nav.Link>
                        <Nav.Link href="#3">Konfiguracja przeglądarki</Nav.Link>
                        <Nav.Link href="#4">Uruchomienie skryptu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Header;