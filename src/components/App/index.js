import "./App.css";
import Greeting from "../Greeting";
import { useState, useEffect } from "react";
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
	}

	useEffect(() => {
		if (playerChoice !== "" && computerChoice !== "") {
			if (playerChoice === computerChoice) {
				setResult("Draw");
			} else {
				setResult("Keep playing");
			}
		}
	}, [playerChoice, computerChoice]);

	if (username !== "") {
		console.log(`${playerChoice} is the player's choice`);
	}

	console.log(`${computerChoice} is the computer's choice`);
	console.log(result);

	return (
		<div className="App">
			<p>ROCK</p>
			<p>PAPER</p>
			<p>SCISSORS</p>

			<br />
			<Greeting
				handleUsername={handleUsername}
				username={username}
				welcomePlayer={welcomePlayer}
				welcomeMsg={welcomeMsg}
			/>
			<br />
			<Game
				handleClick={handleClick}
				playerChoice={playerChoice}
				computerChoice={computerChoice}
			/>
			<br />
			<Result result={result} />
		</div>
	);
}

export default App;
