import React from 'react';

const TweetButton = (props) => (
	<button
		type="button"
		className="button button-tweet"
		onClick={props.tweetQuote}
		>
		Tweet This
	</button>
);

export default TweetButton;
