import React from 'react';
import './BreakTime.css'


const BreakTime = ({ timeBreak }) => {
    return (
        <div className='breakTime'>
            <h4>Break Time:</h4>
            <p>{timeBreak}min</p>

        </div>
    );
};

export default BreakTime;