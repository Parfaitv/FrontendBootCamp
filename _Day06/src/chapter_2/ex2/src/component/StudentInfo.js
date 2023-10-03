import React from 'react'
import { Container, Image } from 'react-bootstrap';
import avatar from '../assets/avatarka.png'

const StudentInfo = () => {
    return (
        <div className='mt-5 d-flex justify-content-center align-items-center'>
            <Container className="d-flex align-items-center justify-content-center"
            style={{ width: 500, height: 500}}>
                <Image width={250} height={250} src={avatar} roundedCircle />
                <Container className="d-flex text-wrap flex-column align-items-start justify-content-center"
                >
                    <h4>Абдуганиев Мухаммад-Али Абдумавлянович</h4>
                    <div >Возраст: 22</div>
                </Container>
            </Container>
        </div>
    )
}

export default StudentInfo
