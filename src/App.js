//npx create-react-app redux-clicker
//npm install @reduxjs/toolkit react-redux
import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addPoint } from "../features/gameSlice";

import ChildOne from "./components/ChildOne";
import { changeName } from "./features/playerSlice";
import { useEffect } from "react";

function App() {
	//State: info being hold
	//const [points, setPoints] = useState(0);

	const[name, setName] = useState('')
	const dispatch = useDispatch();
	const playerName = useSelector((state) => state.player.usename);
	
  
  
	const handleNameChange = (event) => {
    	setName(event.target.value)
	};
	
	const handleSubmitName = (event) => {
		event.preventDefault();
		dispatch(changeName(name));
		localStorage.setItem('clicker_username', name)
	}
  
  useEffect(() => {
    const username = localStorage.getItem('clicker_username');
    dispatch(changeName(username))
  })
  
	const points = useSelector((state) => state.game.points);

	//Action:things to do to our store
	/*const handleButtonClick = () => {
    setPoints(points + 1)
  }*/


	const handleButtonClick = () => {
		dispatch(addPoint());
	};

	//view: what the user sees
	return (
		<div className="App">
			<header className="App-header">
				<img
					onClick={handleButtonClick}
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<h1>Name: {playerName}</h1>
				<form onSubmit = {handleSubmitName} />
				<input value={playerName} onChange={handleNameChange} type='text'/>
				<h1>Points: {points}</h1>
				<ChildOne />
			</header>
		</div>
	);
}

export default App;
