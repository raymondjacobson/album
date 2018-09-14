import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/about">About</Link>
      </footer>
    );
  }
}

export default Header;
