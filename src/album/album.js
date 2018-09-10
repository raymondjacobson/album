import React, { Component } from 'react';
import './album.css';

class Album extends Component {
  render() {
    const albumInfo = this.props.albumInfo;

    return (
      <div className="album">
        <img src={albumInfo.art} />
        <h1>{albumInfo.title}</h1>
        <h2>{albumInfo.artist}</h2>
      </div>
    );
  }
}

export default Album;
