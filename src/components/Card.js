import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  render() {

    const ifEmoji = () => {
      if (this.props.emoji) {
        return <span className='card__content-emoji'>{emoji.getUnicode(this.props.emoji)}</span>
      }
    }

    return (
      <div className="card card__content">
        <span className='card__content-text'>{this.props.text}</span>
        {ifEmoji()}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string
};

export default Card;
