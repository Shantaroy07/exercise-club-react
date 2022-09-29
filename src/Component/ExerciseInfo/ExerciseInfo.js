import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './ExerciseInfo.css'

const ExerciseInfo = ({ addBtn }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])


    return (
        <div className='exerciseInfo-container'>
            {
                exercises.map(exercise => <Exercise exercise={exercise} addBtn={addBtn}></Exercise>)
            }


        </div>

    );
};

export default ExerciseInfo;