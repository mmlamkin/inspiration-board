import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card'

// const CARDS = [{
//   "id": 345,
//   "text": "you are enough",
//   "emoji": null
// },
// {
//   "id": 344,
//   "text": "wow!",
//   "emoji": "heart_eyes_cat"
// },
// {
//   "id": 348,
//   "text": "100",
//   "emoji": null
// },
// {
//   "id": 347,
//   "text": "BE EXCELLENT TO EACHOTHER",
//   "emoji": null
// },
// {
//   "id": 333,
//   "text": "asdf",
//   "emoji": "beer"
// },
// {
//   "id": 332,
//   "text": "Go Get'em!",
//   "emoji": "beer"
// }]

class App extends Component {


  render() {
    return (
      <section>
        <header className="header">
        <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board 
        url="https://inspiration-board.herokuapp.com/boards/"
        boardName={`mary`}
        />
      </section>
    );
  }
}

export default App;
