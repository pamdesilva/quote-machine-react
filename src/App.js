import React, { Component } from 'react';
import Quote from './Quote';
import NextButton from './NextButton';
import TweetButton from './TweetButton';

class App extends Component {
  nextQuote = () => {
    console.log('Clicked!');
  }

  tweetQuote = () => {
    console.log('Tweet!');
  }

  render() {
    return (
      <div className="App">
        <Quote />
        <NextButton nextQuote={this.nextQuote} />
        <TweetButton tweetQuote={this.tweetQuote} />
      </div>
    );
  }
}

export default App;
