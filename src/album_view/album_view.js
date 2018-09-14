import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Album from '../album';
import Song from '../song';
import './album_view.css';
import Store from '../store';

class AlbumView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songPlayingIndex: null,
      isPlaying: false
    };
  }

  startAlbum() {
    this.setState({
      songPlayingIndex: 0,
      isPlaying: !this.state.isPlaying
    });
  }

  nextSong() {
    this.setState({
      songPlayingIndex: this.state.songPlayingIndex + 1
    });
  }

  render() {
    const albums = Store.getState().albums;

    const id = this.props.match.params.id;
    const albumInfo = albums[id];
    const songs = albumInfo.songs.map((song, i) => {
      let songListItem =
        this.state.songPlayingIndex === i && this.state.isPlaying ? (
          <Song
            song={song.name}
            songLocation={
              albumInfo.location + albumInfo.artist + ' - ' + song.name + '.mp3'
            }
            selected={true}
            isPlaying={true}
            songEndedCallback={() => {
              this.nextSong();
            }}
          />
        ) : (
          <Song
            song={song.name}
            songLocation={
              albumInfo.location + albumInfo.artist + ' - ' + song.name + '.mp3'
            }
          />
        );
      return <li key={song.name}>{songListItem}</li>;
    });

    return (
      <div className="album-view">
        <div className="album-view-wrap">
          <div className="back-button">
            <Link to={'/'}>&larr;</Link>
          </div>
          <Album
            albumInfo={albumInfo}
            showPlayButton={true}
            startAlbum={() => this.startAlbum()}
          />
          <ul>{songs}</ul>
        </div>
      </div>
    );
  }
}

export default AlbumView;
