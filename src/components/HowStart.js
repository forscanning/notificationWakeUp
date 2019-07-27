import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LinkToApp from './LinkToApp'

import tampermonkeyLogo from '../img/tampermonkey.png'
import autoRefresh from '../img/autoRefresh.png'

const HowStart = () => {

    return (
        <Card className="text-center h5">
            <h1 className="display-2">Jak zacząć</h1>
            Aby rozpocząć należy ściągnąć dwie wtyczki Tampermonkey oraz Auto Refresh (o ile nie Masz takiej wtyczki)
                <Row className="mt-3 mx-auto mb-3">
                <Col md={6} sm={6}>
                    <LinkToApp src={tampermonkeyLogo} name="Tampermonkey" style={{ width: '12rem' }} link='https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=pl' />
                </Col>
                <Col md={6} sm={6}>
                    <LinkToApp src={autoRefresh} name="Auto Refresh" style={{ width: '12rem' }} link='https://chrome.google.com/webstore/detail/auto-refresh/ifooldnmmcmlbdennkpdnlnbgbmfalko?hl=pl' />
                </Col>
            </Row>
        </Card>
    )
}

export default HowStart;