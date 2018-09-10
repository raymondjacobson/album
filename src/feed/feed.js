import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Album from '../album';
import './feed.css';

const ALBUM_1 = {
  artist: 'Mac Miller',
  title: 'Swimming',
  art:
    'https://images.genius.com/0327e4a856f14b2430e6e1a9333b1f1f.1000x1000x1.jpg'
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

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: Array(20).fill(null)
    };
  }

  albumList() {
    let list = [];
    for (let i = 0; i < ALBUMS.length; ++i) {
      const link = '/album/' + i;
      list.push(
        <Link to={link}>
          <div className="flexItem">
            <Album albumInfo={ALBUMS[i]} />
          </div>
        </Link>
      );
    }
    return list;
  }

  render() {
    return (
      <div className="feed">
        <div className="flexContainer">{this.albumList()}</div>
      </div>
    );
  }
}

export default Feed;
