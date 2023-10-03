import React from 'react';
import { Col, Card } from 'react-bootstrap';


const OrdersInOneUser = ({data, isAdm=false}) => {
  console.log(data);
  let idMenuItems = data.items.join(', ')
  let isActive = data.isActive.toString()
  return (
    <Col className="d-flex align-items-center justify-content-center mb-2">
      <Card className="d-flex align-items-center justify-content-center">
        <div style={{width:"200px"}} className="text-black-150 m-2">
          {isAdm &&
            <div>
              Id User = {data.userId}
            </div>
          }
          <div>
            Id order = {data.id}
          </div>
          <div>
            Active order = {isActive}
          </div>
          <div className="d-flex align-items-center justify-content-start text-wrap">
            Id menu items = {idMenuItems}
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default OrdersInOneUser