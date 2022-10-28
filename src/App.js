//npx create-react-app redux-clicker
//npm install @reduxjs/toolkit react-redux
import "./App.css";
import React from "react";
import Name from "./components/Name";
import Game from "./components/Game";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
	//State: info being hold
	//const [points, setPoints] = useState(0);

	//Action:things to do to our store
	/*const handleButtonClick = () => {
    setPoints(points + 1)
  }*/

	const playerName = useSelector((state) => state.player.usename);

	//view: what the user sees
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<p>Username: {playerName}</p>
					<Link to="/">
						<button>Home</button>
					</Link>
					<Link to="/name">
						<button>Set Name</button>
					</Link>
					<Link to="/game/gameId">
						<button>Play Game</button>
					</Link>

					{playerName === "Admin" && (
						<Link to="/admin">
							<button>Admin Setting</button>
						</Link>
					)}
				</div>
			</header>
			<Routes>
				<Route path="/name" element={<Name />} />
				<Route path="/game:gameId" element={<Game />} />
				{playerName === "Admin" && (
					<Route path="/admin" element={<p>Welcome Admin!</p>} />
				)}
			</Routes>
		</div>
	);
}

export default App;
