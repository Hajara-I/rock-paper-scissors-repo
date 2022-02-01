import "./App.css";
import Greeting from "../Greeting";
import { useState } from "react";
import Game from "../Game";

function App() {
	const [username, setUsername] = useState("");
	const [welcomeMsg, setWelcomeMsg] = useState("");
	const [playerChoice, setPlayerChoice] = useState("");

	function handleUsername(event) {
		const newUsername = event.target.value;
		setUsername(newUsername);
		console.log(newUsername);
	}

	function welcomePlayer() {
		const player = username;
		setWelcomeMsg(`Welcome ${player}, let's play!`);
		console.log(welcomeMsg);
	}

	function playerClick(event) {
		let choice = event.target.value;
		setPlayerChoice(choice);
		console.log(playerChoice);
	}

	return (
		<div className="App">
			<p>Play rock, paper, scissors!</p>
			<Greeting
				handleUsername={handleUsername}
				username={username}
				welcomePlayer={welcomePlayer}
				welcomeMsg={welcomeMsg}
			/>
			<Game playerClick={playerClick} playerChoice={playerChoice} />
		</div>
	);
}

export default App;
