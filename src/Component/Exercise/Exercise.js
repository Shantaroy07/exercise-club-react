import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, addBtn }) => {
    const { img, name, info, age, duration } = exercise;
    return (
        <div className='exercise'>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{info}</p>
                <h4>For Age:{age}</h4>
                <h4>Time Required:{duration}</h4>
            </div>
            <div>
                <p className='add-btn' onClick={() => addBtn(duration)} >Add to list</p>
            </div>

        </div>
    );
};

export default Exercise;