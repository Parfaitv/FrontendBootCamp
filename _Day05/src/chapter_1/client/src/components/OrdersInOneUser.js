import React from 'react';
import { Col, Card } from 'react-bootstrap';
// import OneOrder from './OneOrder';

const OrdersInOneUser = ({data}) => {
  let idMenuItems = data.items.join(', ')
  let isActive = data.isActive.toString()
  return (
    <Col className="d-flex align-items-center justify-content-center mb-2">
      <Card className="d-flex align-items-center justify-content-center">
        <div className="text-black-150 m-2">
          <div>
            Id order = {data.id}
          </div>
          <div>
            Active order = {isActive}
          </div>
          <div className="d-flex align-items-center justify-content-start text-nowrap">
            Id menu items = {idMenuItems}
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default OrdersInOneUser