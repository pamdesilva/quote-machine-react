import React from 'react';

const NextButton = (props) => (
	<button
		type="button"
		className="next-quote"
		onClick={props.nextQuote}
		>
		Next Quote
	</button>
);

export default NextButton;
