
import { useState } from 'react';
import AddBreakTime from '../AddBreakTime/AddBreakTime';
import BreakTime from '../BreakTime/BreakTime';
import ExerciseTime from '../ExerciseTime/ExerciseTime';
import './Details.css'
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../fakedb';



const Details = ({ addTime }) => {
    const [timeBreak, setBreakTime] = useState(0);
    const notify = () => toast("Wow COngratulations!");

    function timeForBreak(e) {
        setBreakTime(e);
        addToDb(e);


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
            <button className='style' onClick={notify}>Activity Completed</button>
            <ToastContainer />

        </div>
    );
};

export default Details;