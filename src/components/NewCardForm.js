import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]
const defaultOption = EMOJI_LIST[0]

class NewCardForm extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue
    this.setState(updateState);
  }

  valid = () => {
    return this.state.text.length > 0
  }

  clearForm = () => {
    this.setState({
    text: ''
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.valid()) {
      this.props.addCardCallback(this.state);
      this.clearForm();
    }
  }

  render () {

    const emojiList = () => {
      const emojis = EMOJI_LIST.map((emoji) => {
        return (
          emoji.getUnicode(emoji)
        );
      });
        return emojis
    }

    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="text">Inspiration: </label>
          <textarea name="text" value={this.state.text} onChange={this.onFieldChange} />
        </div>

        <Dropdown options={EMOJI_LIST} onChange={this._onSelect} value={defaultOption} placeholder="Select an Emoji" />

        <input type="submit" value="Add Card" />

      </form>
    )
  }


}

export default NewCardForm;
