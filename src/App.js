import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './about';
import AlbumView from './album_view';
import Feed from './feed';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlayCircle, faPauseCircle);

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

        <Footer />
      </div>
    );
  }
}

export default App;
