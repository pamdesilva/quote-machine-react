import React from 'react';

const NextButton = (props) => (
	<button
		type="button"
		className="next-quote"
		onClick={props.nextQuote}
		>
		Next Line
	</button>
);

export default NextButton;
