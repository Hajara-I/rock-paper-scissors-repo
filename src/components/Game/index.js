import React from "react";

export default function Game(props) {
	return (
		<section>
			<p className="prompt-text">Select your weapon</p>
			<br />
			<div>
				<button
					id="rock"
					className="button"
					onClick={props.handleClick}
					value="ROCK"
				>
					✊
				</button>
			</div>
			<br />
			<div>
				<button
					id="paper"
					className="button"
					onClick={props.handleClick}
					value="PAPER"
				>
					🖐️
				</button>
			</div>
			<br />
			<div>
				<button
					id="scissors"
					className="button"
					onClick={props.handleClick}
					value="SCISSORS"
				>
					✌
				</button>
			</div>
			<br />
			<p className="announcement">{props.announcement}</p>
		</section>
	);
}
