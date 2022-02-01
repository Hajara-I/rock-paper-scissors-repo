import React from "react";

export default function Game(props) {
	return (
		<section>
			<p>Select your weapon</p>

			<div className="game-buttons" id="rock">
				<button onClick={props.handleClick} value="rock">
					Rock
				</button>
			</div>
			<div className="game-buttons" id="paper">
				<button onClick={props.handleClick} value="paper">
					Paper
				</button>
			</div>
			<div className="game-buttons" id="scissors">
				<button onClick={props.handleClick} value="scissors">
					Scissors
				</button>
				<p>{`You chose ${props.playerChoice} and Computer chose ${props.computerChoice}`}</p>
			</div>
		</section>
	);
}
