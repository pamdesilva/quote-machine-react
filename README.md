# Movie Quotes Generator 🍿

A little experiment: generate lines from famous movies and insert them into pre-composed tweets.

[View the demo](https://moviequotes.pamela.io).

## How it works

Quotes are pulled from [Andrux API](https://market.mashape.com/andruxnet/random-famous-quotes).

### Quickstart

1. Install dependencies
```
$ npm install
```
2. [Sign up for an API key](https://market.mashape.com/andruxnet/random-famous-quotes) and insert the key in the `env.example` file. 
3. Rename `env.example` file to `.env`.
4. Start the server:
```
$ npm start --require dotenv/config
```
