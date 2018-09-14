import React, { Component } from 'react';
import './album.css';
import PlayButton from '../components/play_button';

class Album extends Component {
  startAlbum() {
    this.props.startAlbum();
  }

  render() {
    const albumInfo = this.props.albumInfo;
    const showPlayButton = this.props.showPlayButton;

    let playButton = null;
    if (showPlayButton) {
      playButton = <PlayButton startPlaying={() => this.startAlbum()} />;
    }

    return (
      <div className="album">
        {playButton}
        <img alt={'Album art'} src={albumInfo.art} />
        <h1>{albumInfo.title}</h1>
        <h2>{albumInfo.artist}</h2>
      </div>
    );
  }
}

export default Album;
