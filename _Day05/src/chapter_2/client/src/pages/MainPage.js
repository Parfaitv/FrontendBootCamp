import React, { useEffect, useState} from 'react';
import { Row, Button } from "react-bootstrap";
import OrdersInOneUser from '../components/OrdersInOneUser';
import NotAuth from './NotAuth';
import {allOrders} from '../http/allApi'

const Main = () => {
  const [token, setToken] = useState({});
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    let local = localStorage.getItem('token')
    let localParse = JSON.parse(local)
    setLoading(true)
    setToken(localParse)
  }, [])

  const request = async (who) => {
    if(who === 'user') {
      let allOrder = await allOrders()
      let ordersFilter = allOrder.filter(order => order.userId === token.id)
      console.log(token);
      setData(ordersFilter)
    } else {
      let allOrder = await allOrders()
      setData(allOrder)
    }
  }

  if(!token) {
    return (
      <NotAuth />
    )
  }

  if (!loading) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1>Loading...</h1>
        </div>
    )
  }

  return (
    <>
    { token.role === 'USER' ? 
        <>
          {
            token.orders.length ?
              <div>
                <div className='d-flex align-items-center justify-content-center mt-3 flex-column'>
                <Button
                variant="outline-success"
                id="button-addon2"
                onClick={() => request('user')}
                >
                Показать все заказы
                </Button>
                </div>
                <Row md={3} className="d-flex align-items-center justify-content-center mt-3">
                {data.map((elem) => <OrdersInOneUser key={elem.id} data={elem} />)}
                </Row>
              </div>
              :
              <div style={{height:"50vh"}} className="d-flex align-items-center justify-content-center">
                <h1>Иди работать !</h1>
              </div>
          }
        </>
    :
    <div>
      <div className='d-flex align-items-center justify-content-center mt-3 flex-column'>
        <Button
        variant="outline-success"
        id="button-addon2"
        onClick={() => request('admin')}
        >
        Показать все заказы
        </Button>
      </div>
      <Row md={3} className="d-flex align-items-center justify-content-center mt-3">
        {data.map((elem) => <OrdersInOneUser key={elem.id} data={elem} isAdm={true} />)}
      </Row>
    </div>
    }
    </>
  )
}

export default Main
