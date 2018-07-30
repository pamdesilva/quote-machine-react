# Movie Quotes Generator

Generates lines from famous movies and inserts it into pre-composed tweets. Quotes are pulled from the [Andrux API](https://market.mashape.com/andruxnet/random-famous-quotes).

### To use

1. [Sign up for an API key](https://market.mashape.com/andruxnet/random-famous-quotes) and insert the key in the `env.example` file. 
2. Rename `env.example` file to `.env`.
3. Then start the server:

```
npm start --require dotenv/config
```
