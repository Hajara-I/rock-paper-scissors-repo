import "./App.css";
import Greeting from "../Greeting";
import { useState } from "react";
import Game from "../Game";
import Result from "../Result";

function App() {
	const [username, setUsername] = useState("");
	const [welcomeMsg, setWelcomeMsg] = useState("");
	const [playerChoice, setPlayerChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [result, setResult] = useState("");

	function handleUsername(event) {
		const newUsername = event.target.value;
		setUsername(newUsername);
		//console.log(newUsername);
	}

	function welcomePlayer() {
		const player = username;
		setWelcomeMsg(`Welcome ${player}, let's play!`);
		console.log(welcomeMsg);
	}

	function handleClick(event) {
		//getting player selection from clicked button
		let choice = event.target.value;
		setPlayerChoice(choice);
		// getting a random number
		let weapons = ["rock", "paper", "scissors"];
		let min = Math.ceil(1);
		let max = Math.floor(3);
		let random = Math.floor(Math.random() * (max - min) + min);
		// using random number to pick a weapon for computer
		setComputerChoice(weapons[random]);
		// check winner
		if (playerChoice === computerChoice) {
			setResult("Draw");
		} else {
			setResult("Keep playing");
		}
	}

	console.log(`${playerChoice} is the player's choice`);
	console.log(`${computerChoice} is the computer's choice`);
	console.log(result);

	return (
		<div className="App">
			<p>Play rock, paper, scissors!</p>
			<Greeting
				handleUsername={handleUsername}
				username={username}
				welcomePlayer={welcomePlayer}
				welcomeMsg={welcomeMsg}
			/>
			<Game
				handleClick={handleClick}
				playerChoice={playerChoice}
				computerChoice={computerChoice}
			/>
			<Result result={result} />
		</div>
	);
}

export default App;
