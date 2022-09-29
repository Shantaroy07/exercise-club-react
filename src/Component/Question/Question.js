import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <h3>1. How does react Work?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

            <h3>2.Difference Between Props and States.</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
            <h3>3.Uses of UseEffect except data load.</h3>
            <p>Running on state change: validating input field
                Running on state change: live filtering
                Running on state change: trigger animation on new array value
                Running on props change: update paragraph list on fetched API data update
                Running on props change: updating fetched API data to get BTC updated price</p>
        </div>
    );
};

export default Question;