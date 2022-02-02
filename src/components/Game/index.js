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
					value="rock"
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
					value="paper"
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
					value="scissors"
				>
					✌
				</button>
			</div>
			<br />
			<p value={props.announcement}>{props.announcement}</p>
			{/* <p>{`You chose ${props.playerChoice} and Computer chose ${props.computerChoice}`}</p> */}
		</section>
	);
}
