import React from 'react';
import BreakTime from '../BreakTime/BreakTime';
import ExerciseTime from '../ExerciseTime/ExerciseTime';

import './Details.css'

const Details = ({ addTime }) => {
    return (
        <div className='details'>

            <div className='owner'>
                <h3>Shanta Roy</h3>
                <p>Cumilla,Bangladesh</p>
                <p>Age: 25 </p>
            </div>
            <h3>Add a Break</h3>
            <h3>Exercises Details</h3>

            <ExerciseTime addTime={addTime}></ExerciseTime>
            <BreakTime></BreakTime>
            <button>Activity Completed</button>

        </div>
    );
};

export default Details;