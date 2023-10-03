import React from 'react';
import { Card, Col } from "react-bootstrap";


const OrderCard = ({ orderMenuItems, menu, active=false }) => {
    let itemMenu = menu.filter(item => item.id === orderMenuItems)
    itemMenu = {...itemMenu}[0]
    return (
        <Col className="mt-2 d-flex justify-content-center align-items-center"> 
            <Card style={{width: 300}}>
                <Card.Img width={250} height={250} src={'http://localhost:5000/' + itemMenu.picture} alt={"150X150"}/>
                <div className="text-black-50 mt-1 d-flex justify-content-start align-items-start flex-column">
                    <div className='d-flex justify-content-start align-items-start'>Name: {itemMenu.title}</div>
                    {
                    active &&
                        <div className='d-flex justify-content-start align-items-start flex-column'>
                            <div className='d-flex justify-content-start align-items-start'>
                                Description: {itemMenu.description}
                            </div>
                            <div className='d-flex justify-content-start align-items-start'>
                            Calories: {itemMenu.callQuantity}
                            </div>
                        </div>
                    }
                </div>
            </Card>
        </Col>
    )
}

export default OrderCard
