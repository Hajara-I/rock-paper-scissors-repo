import React from "react";

export default function Score(props) {
	return (
		<div className="score-container">
			<div className="player-score">
				<p>Player</p>
				<p>{props.playerScore}</p>
			</div>
			<div className="computer-score">
				<p>Computer</p>
				<p>{props.computerScore}</p>
			</div>
		</div>
	);
}
