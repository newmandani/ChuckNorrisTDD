import React from "react";
import axios from "axios";
import Joke from "./joke";

const RANDOM_JOKE_URL = "https://api.icndb.com/jokes/random";

const buttonStyles = {
  textAlign: "center",
  padding: "5px 15px",
  marginBottom: "10px",
  backgroundColor: "#eee",
  border: "1px solid #ccc",
};

const jokesBodyStyles = {
  marginTop: "10px",
}

const decodeHtml = (html) => {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: false
  };

  loadJoke = async () => {
    this.setState({ loading: true });

    const { data: { value: { joke } } } = await axios.get(RANDOM_JOKE_URL);

    let jokeText = decodeHtml(joke) 

    this.setState({ loading: false, joke: jokeText});
  };

  render() {
    const { joke, loading } = this.state;

    return (
      <React.Fragment>
        <button onClick={this.loadJoke} type="button" style={buttonStyles}>
          Load a random joke
        </button>
        <div className="jokeBody" styles="{jokesBodyStyles}">
        {!joke && !loading && <div>You haven't loaded any joke yet!</div>}
        {loading && <div>Loading...</div>}
        {joke && !loading && <Joke text={joke} />}
        </div>
      </React.Fragment>
    );
  }
}
