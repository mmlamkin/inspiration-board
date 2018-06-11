import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount = () => {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
      .then( (response) => {
        this.setState({
          cards: response.data
        });
      })
      .catch( (error) => {
        this.setState({
          error: error.message
        });
      });
  }

  renderCards = () => {
    const cardList = this.state.cards.map((card, index) => {
      return (
        <Card
        key={index}
        text={card.card.text}
        emoji={card.card.emoji}
        />
      );
    });
    return cardList
  }

  render() {
    return (
      <div className='board'>
        {this.renderCards()}
      </div>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Board;
