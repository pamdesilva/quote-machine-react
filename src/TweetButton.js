import React from 'react';

const TweetButton = (props) => (
	<button
		type="button"
		className="tweet-quote"
		onClick={props.tweetQuote}
		>
		Tweet This
	</button>
);

export default TweetButton;
