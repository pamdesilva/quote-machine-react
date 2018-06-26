import React from 'react';

const NextButton = (props) => (
	<button
		type="button"
		className="button button-next"
		onClick={props.nextQuote}
		>
		Next Line
	</button>
);

export default NextButton;
