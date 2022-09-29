import logo from './logo.svg';
import './App.css';
import Exercises from './Component/Exercises/Exercises';
import Details from './Component/Details/Details';

function App() {
  return (
    <div className="App app-body">
      <Exercises></Exercises>
      <Details></Details>
    </div>
  );
}

export default App;
