import React from 'react';

const Exercise = ({ exercise }) => {
    const { img, name, info, age, duration } = exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{info}</p>
            <h4>For Age:{age}</h4>
            <h4>Time Required:{duration}</h4>

        </div>
    );
};

export default Exercise;