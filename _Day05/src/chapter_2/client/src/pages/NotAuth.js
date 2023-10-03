import React from 'react';
import { Card, Container } from "react-bootstrap";



const NotAuth = () => {
  return (
    <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Необходимо авторизоваться</h2>
                
            </Card>
        </Container>
  )
}

export default NotAuth
