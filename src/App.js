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

  tweetQuote = () => {
    console.log('Tweet!');
  };

  render() {
    const { quote, movie } = this.state;
    return (
      <div className="App">
        {
          this.state.quote || this.state.movie ?
            <Quote quoteText={quote} movieText={movie} /> : <p>Loading...</p>
        }
        <NextButton nextQuote={this.fetchQuote} />
        <TweetButton tweetQuote={this.tweetQuote} />
      </div>
    );
  }
}

export default App;
