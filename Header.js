import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
        </div>
        <Link to="/list">list</Link>
        <Link to="/time">time</Link>
        <Link to="/create">create</Link>
      </div>
    )
  }
}

export default Header