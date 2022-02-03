function Popup(props) {
	return props.trigger ? (
		<div className="popup-container">
			<div className="popup-inner">
				<button className="close-btn" onClick={props.setTrigger}>
					CLOSE
				</button>
				<p className="game-over">Game Over!</p>
				<br />
				<br />
				<p className="game-complete">{props.gameComplete}</p>
				<br />
				<div className="popup-score-container">
					<div className="player-score">
						<p className="popup-username">Player</p>
						<p className="popup-score">{props.playerScore}</p>
					</div>
					<div className="computer-score">
						<p className="popup-username">Computer</p>
						<p className="popup-score">{props.computerScore}</p>
					</div>
				</div>
			</div>
		</div>
	) : (
		""
	);
}

export default Popup;
