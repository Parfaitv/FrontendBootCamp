import React, {useState, useEffect} from 'react';
import { Container, Button } from 'react-bootstrap';
import SomeList from './SomeList';


const Timer = () => {
    const [time, setTime] = useState(0);
    const [data, setData] = useState([]);

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
        const timeStap = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
        return timeStap;
    };

    const addResult = () => {
        const value = formatTime(time)
        data.push(value)
        setData(data)
    }

    const clearResult = () => {
        setData([])
    }

    return (
        <div className='mt-5 d-flex justify-content-center align-items-center flex-column'
        >
            <Container className="d-flex align-items-center justify-content-center"
            style={{width:200, height:200, border:'5px dashed lightgray', borderRadius:"50%"}} >
                <h2>{formatTime(time)}</h2>
            </Container>
            <Container className="d-flex align-items-center justify-content-center"
            style={{margin:"1rem"}}>
                <Button
                        variant="outline-success"
                        style={{margin:"3px"}}
                        onClick={addResult} 
                        >
                        Add
                </Button>
                <Button
                        variant="outline-success"
                        style={{margin:"3px"}}
                        onClick={clearResult} 
                        >
                        Reset
                </Button>
            </Container>
            {data.length >= 1 &&
                <SomeList data={data} />
            }
        </div>
    )
}

export default Timer
