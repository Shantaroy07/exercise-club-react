import React from 'react';
import ExerciseInfo from '../ExerciseInfo/ExerciseInfo';
import Header from '../Header/Header';
import './Exercises.css'

const Exercises = ({ addBtn }) => {

    return (
        <div className='exercises'>
            <Header></Header>
            <ExerciseInfo addBtn={addBtn} ></ExerciseInfo>

        </div>
    );
};

export default Exercises;