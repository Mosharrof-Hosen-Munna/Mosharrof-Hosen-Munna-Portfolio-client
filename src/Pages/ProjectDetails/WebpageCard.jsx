import React from 'react'
import { Card, Col } from 'react-bootstrap'

const WebpageCard = ({webpage,name}) => {
    return (
        <Col>
        <Card className='border-0 shadow h-100 overflow-hidden'>
            <div className='webpage'>
            <img className='w-100 pointer' src={webpage} alt="" />
            </div>
            <Card.Body>
                <div className='text-center'>{name} Page</div>
            </Card.Body>
        </Card>

    </Col>
    )
}

export default WebpageCard
