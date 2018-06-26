import React from 'react';
import { ChevronsRight } from 'react-feather';
import PropTypes from 'prop-types';

const NextButton = (props) => (
	<button
		type="button"
		className="button-next"
		onClick={props.nextQuote}
		>
		Next Line
		<div className="button-icon"><ChevronsRight size={30} /></div>
	</button>
);

NextButton.propTypes = {
	nextQuote: PropTypes.func.isRequired
}

export default NextButton;
