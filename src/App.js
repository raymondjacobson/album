import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import About from './about';
import Feed from './feed';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Feed</Link>
          <Link to="/about">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Feed} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
