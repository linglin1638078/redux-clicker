//npx create-react-app redux-clicker
//npm install @reduxjs/toolkit react-redux
import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint } from '../features/gameSlice';
import ChildOne from './components/ChildOne';



function App() {
  //State: info being hold
  //const [points, setPoints] = useState(0);

  const dispatch = useDispatch();
  const points = useSelector((state) => 
    state.game.points
  )

  //Action:things to do to our store
  /*const handleButtonClick = () => {
    setPoints(points + 1)
  }*/

  const handleButtonClick = () => {
    dispatch(addPoint());
  }
  

  //view: what the user sees
  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handleButtonClick} src={logo} className="App-logo" alt="logo" />
        <h1>Points: {points}</h1>
        <ChildOne />
        
      </header>
    </div>
  );
}

export default App;
