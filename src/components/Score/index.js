import React from "react";

export default function Score(props) {
	return (
		<div className="score-container">
			<div className="player-score">
				<p className="username">Player</p>
				<p className="score">{props.playerScore}</p>
			</div>
			<div className="computer-score">
				<p className="username">Computer</p>
				<p className="score">{props.computerScore}</p>
			</div>
		</div>
	);
}
