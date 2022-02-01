import React from "react";

export default function Greeting(props) {
	return (
		<div>
			<input
				placeholder="Please enter a username"
				onChange={props.handleUsername}
				value={props.username}
			/>
			<button onClick={props.welcomePlayer}>Play</button>
			<h3 value={props.welcomeMsg}>{props.welcomeMsg}</h3>
		</div>
	);
}
