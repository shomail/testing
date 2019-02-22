import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieForm extends Component {
  state = {
    text: '',
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;
    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={() => submitForm({
              text,
            })
          }
        >
          <label htmlFor="text">
            Text
            <input id="text" type="text" onChange={e => this.setState({ text: e.target.value })} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  submitForm: PropTypes.func,
};

MovieForm.defaultProps = {
  submitForm: () => true,
};
