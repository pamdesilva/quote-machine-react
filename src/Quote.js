import React from 'react';

const Quote = (props) => (
	<div className="quoteBox">
    <p className="quoteText">
      <span className="quoteMarks">“</span>
      {props.quoteText}
      <span className="quoteMarks">”</span>
    </p>
    <p className="movieText">— {props.movieText}</p>
  </div>
);

export default Quote;
