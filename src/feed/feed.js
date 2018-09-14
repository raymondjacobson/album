import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Album from '../album';
import './feed.css';
import Store from '../store';

class Feed extends Component {
  albumList() {
    const albums = Store.getState().albums;
    let list = [];
    for (let i = 0; i < albums.length; ++i) {
      const link = '/album/' + i;
      list.push(
        <Link key={link} to={link}>
          <div className="flexItem">
            <Album albumInfo={albums[i]} />
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
