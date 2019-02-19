import React, { Component } from 'react';

export default class MovieForm extends Component {
  render() {
    return (
      <div>
        <form data-testid="movie-form" onSubmit={() => console.log('form submitted')}>
          <input type="text" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
