import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './play_button.css';

class PlayButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  startPlaying() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  render() {
    let icon = this.state.isPlaying ? 'pause-circle' : 'play-circle';
    return (
      <div className="play-button" onClick={() => this.startPlaying()}>
        <button>
          <FontAwesomeIcon icon={icon} />
        </button>
      </div>
    );
  }
}

export default PlayButton;
