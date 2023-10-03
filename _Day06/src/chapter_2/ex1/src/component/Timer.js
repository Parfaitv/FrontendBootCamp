import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='mt-5 d-flex justify-content-center align-items-center'
        >
            <Container className="d-flex align-items-center justify-content-center"
            style={{width:200, height:200, border:'5px dashed lightgray', borderRadius:"50%"}} >
                <h2>{formatTime(time)}</h2>
            </Container>
        </div>
    )
}

export default Timer
