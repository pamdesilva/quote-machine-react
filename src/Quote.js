import React from 'react';

const Quote = (props) => (
	<div className="quote-box">
    <p>{props.quoteText}</p>
    <p>— {props.movieText}</p>
  </div>
);

export default Quote;
