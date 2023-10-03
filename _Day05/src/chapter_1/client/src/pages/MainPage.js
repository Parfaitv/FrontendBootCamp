import React, { useState} from 'react';
import { Form, InputGroup, Button, Row } from "react-bootstrap";
import { allOrders } from '../http/allApi';
import OrdersInOneUser from '../components/OrdersInOneUser';

const Main = () => {

  const [id, setId] = useState('');
  const [data, setData] = useState([])
  let hero;
  const request = async () => {
      try {
        let response = await allOrders()
        hero = response.filter(order => order.userId === Number(id))
        setData(hero)
        return response
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <InputGroup className="mb-5 w-50 p-4" size='xs'>
        <Form.Control
          value={id}
          placeholder="Введите id заказа"
          size='xs'
          onChange={e => setId(e.target.value)}
        />
        <Button
          variant="outline-dark"
          id="button-addon2"
          onClick={request}
        >
          Click
        </Button>
      </InputGroup>
      <div>
        {
          data &&
          <Row className="d-flex align-items-center justify-content-center">
            {data.map((elem) => <OrdersInOneUser key={elem.id} data={elem} />)}
          </Row>
        }
      </div>
    </div>
  )
}

export default Main
