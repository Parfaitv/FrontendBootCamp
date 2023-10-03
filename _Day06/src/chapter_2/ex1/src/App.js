import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import StudentInfo from './component/StudentInfo';
import Timer from './component/Timer';



const App = () => {
    const [student, setStudent] = useState(true)

    return (
        <div>
            <div className='d-flex justify-content-around align-items-center mt-3'>
                <Button
                    variant="outline-success"
                    id="button-addon2"
                    onClick={() => setStudent(false)} >
                    Stopwatch
                </Button>
                <Button
                    variant="outline-success"
                    id="button-addon2"
                    onClick={() => setStudent(true)} >
                    StudentInfo
                </Button>
            </div>
            {student ?
                <StudentInfo />
                :
                <Timer />

            }
        </div>

    );
}

export default App;
