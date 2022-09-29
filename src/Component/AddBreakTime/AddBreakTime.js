import React from 'react';
import './AddBreakTime.css'

const AddBreakTime = ({ setBreak }) => {
    return (
        <div className='addBreakTime'>
            <button onClick={() => setBreak(10)}>10s</button>
            <button onClick={() => setBreak(20)}>20s</button>
            <button onClick={() => setBreak(30)} >30s</button>
            <button onClick={() => setBreak(40)}>40s</button>
            <button onClick={() => setBreak(50)}>50s</button>
        </div>
    );
};

export default AddBreakTime;