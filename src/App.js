import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './about';
import AlbumView from './album_view';
import Feed from './feed';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <Route exact path="/" component={Feed} />
          <Route exact path="/about" component={About} />
          <Route path="/album/:id" component={AlbumView} />
        </main>
      </div>
    );
  }
}

export default App;
