import "./App.css";
import Greeting from "../Greeting";
import { useState } from "react";

function App() {
	const [username, setUsername] = useState("");
	const [welcomeMsg, setWelcomeMsg] = useState("");

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

	return (
		<div className="App">
			<p>Play rock, paper, scissors!</p>
			<Greeting
				handleUsername={handleUsername}
				username={username}
				welcomePlayer={welcomePlayer}
				welcomeMsg={welcomeMsg}
			/>
		</div>
	);
}

export default App;
