import "./App.css";
import Greeting from "../Greeting";
import { useState, useEffect } from "react";
import Game from "../Game";
import Result from "../Result";
import Score from "../Score";

function App() {
	const [username, setUsername] = useState("");
	const [welcomeMsg, setWelcomeMsg] = useState("");
	const [playerChoice, setPlayerChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [result, setResult] = useState("");
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

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
		let min = Math.ceil(0);
		let max = Math.floor(3);
		let random = Math.floor(Math.random() * (max - min) + min);
		console.log(random);
		// using random number to pick a weapon for computer
		setComputerChoice(weapons[random]);
		let announcement = `You chose ${playerChoice} and Computer chose ${computerChoice}`;
	}

	useEffect(() => {
		if (playerChoice !== "" && computerChoice !== "") {
			if (playerChoice === computerChoice) {
				setResult("Draw");
			} else if (
				(playerChoice === "scissors" && computerChoice === "paper") ||
				(playerChoice === "paper" && computerChoice === "rock") ||
				(playerChoice === "rock" && computerChoice === "scissors")
			) {
				setResult("You Won");
				setPlayerScore(playerScore + 1);
			} else {
				setResult("Computer Won");
				setComputerScore(computerScore + 1);
			}
		}
	}, [playerChoice, computerChoice]);
	if (username !== "") {
		console.log(`${playerChoice} is the player's choice`);
	}

	//console.log(`${computerChoice} is the computer's choice`);
	//console.log(result);

	return (
		<div className="App">
			<div className="title">
				<p>ROCK</p>
				<p>PAPER</p>
				<p>SCISSORS</p>
			</div>
			<br />
			{/* <Greeting
				handleUsername={handleUsername}
				username={username}
				welcomePlayer={welcomePlayer}
				welcomeMsg={welcomeMsg}
			/> */}
			<Game
				handleClick={handleClick}
				playerChoice={playerChoice}
				computerChoice={computerChoice}
				result={result}
			/>
			<br />
			<Result result={result} />
			<br />
			<Score playerScore={playerScore} computerScore={computerScore} />
		</div>
	);
}

export default App;
