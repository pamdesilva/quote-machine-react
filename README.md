# Movie Quotes Generator

Generates lines from famous movies and inserts it into pre-composed tweets. Quotes are pulled from the [Andrux API](https://market.mashape.com/andruxnet/random-famous-quotes).

### To use

[Sign up for an API key](https://market.mashape.com/andruxnet/random-famous-quotes) and insert the key in the *env.example* file. Rename file to just `.env`.
Then start the server:

```
npm start --require dotenv/config
```

## Built With

* [React](https://reactjs.org/)
* [Create React App](https://github.com/facebook/create-react-app)
* [dotenv](https://www.npmjs.com/package/dotenv) - To encrypt API key
