import logo from './logo.svg';
import './App.css';
import Exercises from './Component/Exercises/Exercises';
import Details from './Component/Details/Details';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);


  let exerciseTime = 0;
  function addTime(selectedItem) {
    const item = parseInt(selectedItem);
    exerciseTime = exerciseTime + item;
    setTime(time + exerciseTime);
  }


  return (
    <div className="App app-body">
      <Exercises addBtn={addTime}></Exercises>
      <Details addTime={time}></Details>
    </div>
  );
}

export default App;
