import React, { Component } from 'react';
import Album from '../album';
import Song from '../song';
import './album_view.css';

const ALBUM_1 = {
  artist: 'Mac Miller',
  title: 'Swimming',
  art:
    'https://images.genius.com/0327e4a856f14b2430e6e1a9333b1f1f.1000x1000x1.jpg',
  songs: [
    'Come Back to Earth',
    'Hurt Feelings',
    "What's the Use?",
    'Perfecto',
    'Self Care',
    'Wings',
    'Ladders',
    'Small Worlds',
    'Conversation Pt. 1',
    'Dunno',
    'Jet Fuel',
    '2009',
    'So It Goes'
  ]
};

const ALBUM_2 = {
  artist: 'Bon Iver',
  title: 'Bon Iver',
  art: 'http://images.genius.com/745f803cb77ad87d7fdbac572148ee13.900x900x1.jpg'
};

const ALBUM_3 = {
  artist: 'Moses Sumney',
  title: 'Aromanticism',
  art:
    'http://images.genius.com/47cd8dcf0d11cba1482c757abe1a069d.1000x1000x1.jpg'
};

const ALBUM_4 = {
  artist: 'Radiohead',
  title: 'In Rainbows',
  art:
    'https://images.genius.com/525c7ac8ba19f54cb8a545c285649b27.1000x1000x1.jpg'
};

const ALBUMS = [
  ALBUM_1,
  ALBUM_2,
  ALBUM_3,
  ALBUM_4,
  ALBUM_1,
  ALBUM_2,
  ALBUM_3,
  ALBUM_4,
  ALBUM_1,
  ALBUM_2,
  ALBUM_3,
  ALBUM_4
];

class AlbumView extends Component {
  render() {
    const id = this.props.match.params.id;
    const albumInfo = ALBUMS[id];
    const songs = albumInfo.songs.map((song, i) => {
      return (
        <li key={song}>
          <Song song={song} />
        </li>
      );
    });

    return (
      <div className="album-view">
        <div className="album-view-wrap">
          <Album albumInfo={albumInfo} />
          <ul>{songs}</ul>
        </div>
      </div>
    );
  }
}

export default AlbumView;
