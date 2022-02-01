import React from "react";

export default function Result(props) {
	return (
		<div>
			<p value={props.result}>{props.result}</p>
		</div>
	);
}
