import React from 'react';
import './ExerciseTime.css'

const ExerciseTime = ({ addTime }) => {
    return (
        <div className='exerciseTime'>
            <h4>Exercise Time:</h4>
            <p>{addTime}min</p>

        </div>
    );
};

export default ExerciseTime;