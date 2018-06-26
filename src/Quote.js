import React from 'react';
import PropTypes from 'prop-types';

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

Quote.propTypes = {
	quoteText: PropTypes.string.isRequired,
  movieText: PropTypes.string.isRequired
}

export default Quote;
