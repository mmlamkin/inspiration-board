import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card'

const CARDS = [{
          "id": 345,
          "text": "you are enough",
          "emoji": null
      },
      {
          "id": 344,
          "text": "wow!",
          "emoji": "heart_eyes_cat"
      }]
      
class App extends Component {



  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          />
        <Card text={CARDS[1].text} emoji={CARDS[1].emoji} />
      </section>
    );
  }
}

export default App;
