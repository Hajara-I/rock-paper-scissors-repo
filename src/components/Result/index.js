import React from "react";

export default function Result(props) {
	return (
		<div>
			<p className="result" value={props.result}>
				{props.result}
			</p>
		</div>
	);
}
