import React from 'react';
import { Twitter } from 'react-feather';
import PropTypes from 'prop-types';

const TweetButton = (props) => (
	<button
		type="button"
		className="button-tweet"
		onClick={props.tweetQuote}
		>
		Tweet This
		<div className="button-icon">< Twitter size={30} /></div>
	</button>
);

TweetButton.propTypes = {
	tweetQuote: PropTypes.func.isRequired
}

export default TweetButton;
