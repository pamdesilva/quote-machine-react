import React, { Component } from 'react';
import axios from 'axios';
import Quote from './Quote';
import NextButton from './NextButton';
import TweetButton from './TweetButton';

class App extends Component {

  state = {
    quote: '',
    movie: ''
  };

  componentDidMount() {
    this.fetchQuote();
  };

  fetchQuote = () => {
    axios
    .get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1', { headers: { 'X-Mashape-Key': 'MCQ4IHYl2xmshZziTdDt5NNQZAJjp10Ko3WjsnZ5LnK4efTX5U'}})
    .then(response => {
        this.setState({
          quote: response.data[0].quote,
          movie: response.data[0].author
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  tweetQuote = (e) => {
    console.log('Tweet!');
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(this.state.quote + ' – ' + this.state.movie));
  };

  render() {
    const { quote, movie } = this.state;
    return (
      <div>
      <h1>Famous Movie Lines</h1>
      <div className="App">
        {
          this.state.quote || this.state.movie ?
            <Quote quoteText={quote} movieText={movie} /> : <p>Loading...</p>
        }
        <NextButton nextQuote={this.fetchQuote} />
        <TweetButton tweetQuote={this.tweetQuote} />
      </div>
      </div>
    );
  }
}

export default App;
