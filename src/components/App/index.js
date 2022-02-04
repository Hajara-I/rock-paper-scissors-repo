import "./App.css";
// import Greeting from "../Greeting";
import { useState, useEffect } from "react";
import Game from "../Game";
import Result from "../Result";
import Score from "../Score";
import Popup from "../Popup";

function App() {
	const [username, setUsername] = useState("");
	const [welcomeMsg, setWelcomeMsg] = useState("");
	const [playerChoice, setPlayerChoice] = useState("");
	const [computerChoice, setComputerChoice] = useState("");
	const [result, setResult] = useState("");
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [announcement, setAnnouncement] = useState("");
	const [gameComplete, setGameComplete] = useState("");
	const [popup, setPopup] = useState(false);

	function triggerPopup() {
		setPopup(true);
	}

	function closePopUp() {
		setPopup(false);
		document.location.reload();
	}

	function announce() {
		setAnnouncement(
			`You chose ${playerChoice} and the Computer chose ${computerChoice}`
		);
	}

	// function handleUsername(event) {
	// 	const newUsername = event.target.value;
	// 	setUsername(newUsername);
	// 	//console.log(newUsername);
	// }

	// function welcomePlayer() {
	// 	const player = username;
	// 	setWelcomeMsg(`Welcome ${player}, let's play!`);
	// 	console.log(welcomeMsg);
	// }

	function handleClick(event) {
		//getting player selection from clicked button
		let choice = event.target.value;
		setPlayerChoice(choice);
		// getting a random number
		let weapons = ["ROCK", "PAPER", "SCISSORS"];
		let min = Math.ceil(0);
		let max = Math.floor(3);
		let random = Math.floor(Math.random() * (max - min) + min);
		// using random number to pick a weapon for computer
		setComputerChoice(weapons[random]);
	}

	useEffect(() => {
		if (playerChoice !== "" && computerChoice !== "") {
			if (playerChoice === computerChoice) {
				setResult("You Draw");
			} else if (
				(playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
				(playerChoice === "PAPER" && computerChoice === "ROCK") ||
				(playerChoice === "ROCK" && computerChoice === "SCISSORS")
			) {
				setResult("You Won");
				setPlayerScore(playerScore + 1);
			} else {
				setResult("Computer Won");
				setComputerScore(computerScore + 1);
			}
			gameFinish();
			announce();
		}
	}, [playerChoice, computerChoice]);
	if (username !== "") {
		console.log(`${playerChoice} is the player's choice`);
	}

	function gameFinish() {
		if (playerScore === 5) {
			triggerPopup();
			setGameComplete("Congratulations! You won the game!");
		} else if (computerScore === 5) {
			triggerPopup();
			setGameComplete("You lost. Computer won the game");
		}
	}

	return (
		<div className="App">
			<div className="main-container">
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
					announcement={announcement}
				/>
				<br />
				<Result result={result} gameComplete={gameComplete} />
				<br />
				<Score playerScore={playerScore} computerScore={computerScore} />
				<Popup
					trigger={popup}
					setTrigger={closePopUp}
					gameFinish={gameFinish}
					playerScore={playerScore}
					computerScore={computerScore}
					gameComplete={gameComplete}
				/>
			</div>
		</div>
	);
}

export default App;
