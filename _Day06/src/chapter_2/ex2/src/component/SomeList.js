import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const SomeList = ({data}) => {
  return (
    <Container className="d-flex align-items-center justify-content-center text-nowrap flex-column"
    style={{width:300, border:'3px solid black', borderRadius:"10px"}} >
        <Row md={2}>
            {data.map((value, index) => (
                <Col>{index + 1}. - {value}</Col>
            ))}
        </Row>
    </Container>
  )
}

export default SomeList
