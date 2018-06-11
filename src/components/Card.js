import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {

    const ifEmoji = () => {
      if (this.props.emoji) {
        return <p>{emoji.getUnicode(this.props.emoji)}</p>
      }
    }
    return (
      <div className="card">
        <p>{this.props.text}</p>
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
