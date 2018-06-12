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

  addCard = (card) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`)
    .then( (response) => {
      this.setState({
        cards: this.state.cards
      })
    })
    .catch( (error) => {
      this.setState({
        error: error.message
      });
    });
  }

  deleteCard = (id) => {
    axios.delete(`${this.props.url}/${this.props.boardName}/cards/${id}`)
    .then( (response) => {
      this.setState({
        cards: this.componentDidMount()
      })
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
        id={card.card.id}
        text={card.card.text}
        emoji={card.card.emoji}
        deleteCardCallback={this.deleteCard}
        />
      );
    });
    return cardList
  }

  render() {
    return (
      <section>
      <NewCardForm addCardCallback={this.addCard} />
      <div className='board'>
      {this.renderCards()}
      </div>
      </section>
    )
  }

}

Board.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Board;
