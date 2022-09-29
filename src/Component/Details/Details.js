
import { useState } from 'react';
import AddBreakTime from '../AddBreakTime/AddBreakTime';
import BreakTime from '../BreakTime/BreakTime';
import ExerciseTime from '../ExerciseTime/ExerciseTime';
import './Details.css'

const Details = ({ addTime }) => {
    const [timeBreak, setBreakTime] = useState(0);

    function timeForBreak(e) {
        setBreakTime(e);
    }
    return (
        <div className='details'>

            <div className='owner'>
                <h3>Shanta Roy</h3>
                <p>Cumilla,Bangladesh</p>
                <p>Age: 25 </p>
            </div>
            <h3>Add a Break</h3>
            <AddBreakTime setBreak={timeForBreak}></AddBreakTime>

            <h3>Exercises Details</h3>

            <ExerciseTime addTime={addTime}></ExerciseTime>
            <BreakTime timeBreak={timeBreak} s></BreakTime>
            <button>Activity Completed</button>

        </div>
    );
};

export default Details;