import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import LinkToApp from './LinkToApp'

const InstalScripts = () => {
    return (<Card className="text-center h5">
        <h1 className="display-2">Instalacja Skryptów</h1>
        Instnieją dwie wersje tego skryptu. Jedna powiadomi Ciebie tylko o zgłoszeniu, druga będzie pobierała zgłoszenia o których nie będzie musiała Ciebie powiadamiać. Od Ciebie zależy z którego będziesz korzystać, można zainstalować od razu oba.
        <Row className="mt-3 mx-auto mb-3">
            <Col sm={12} className="mb-3">
                <Button variant="primary" size="lg" block href='../userscripts/auto-download.user.js'> Z auto pobieraniem </Button>
            </Col>
            <Col sm={12}>
                <Button variant="primary" size="lg" block> Bez auto pobierania </Button>
            </Col>
        </Row>
    </Card>);
}

export default InstalScripts;