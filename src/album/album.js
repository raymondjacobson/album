import React, { Component } from 'react';
import './album.css';
import PlayButton from '../components/play_button';

class Album extends Component {
  render() {
    const albumInfo = this.props.albumInfo;
    const showPlayButton = this.props.showPlayButton;

    let playButton = null;
    if (showPlayButton) {
      playButton = <PlayButton />;
    }

    return (
      <div className="album">
        {playButton}
        <img src={albumInfo.art} />
        <h1>{albumInfo.title}</h1>
        <h2>{albumInfo.artist}</h2>
      </div>
    );
  }
}

export default Album;
