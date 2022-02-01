import React from "react";
// let rock = document.querySelector("#rock");
// let paper = document.querySelector("#paper");
// let scissors = document.querySelector("#scissors");

// function playerClick(event) {
// 	let choice = event.target.value;
// 	console.log(choice);
// }

export default function Game(props) {
	return (
		<section>
			<p>Select your weapon</p>

			<div className="game-buttons" id="rock">
				<button onClick={props.playerClick} value="rock">
					Rock
				</button>
			</div>
			<div className="game-buttons" id="paper">
				<button onClick={props.playerClick} value="paper">
					Paper
				</button>
			</div>
			<div className="game-buttons" id="scissors">
				<button onClick={props.playerClick} value="scissors">
					Scissors
				</button>
				<p>{`You chose ${props.playerChoice}. Computer chose b`}</p>
			</div>
		</section>
	);
}
