import React, { Component } from 'react';
import './song.css';

class Song extends Component {
  render() {
    return (
      <div className="song">
        <p>{this.props.song}</p>
      </div>
    );
  }
}

export default Song;
