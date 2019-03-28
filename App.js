import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Menu from './Menu.js';
import Footercomp from './Footercomp.js';

class App extends Component {
  render() {
    return [
      <div className="App">                                           
      </div>,
      <Header></Header>,
      <Menu></Menu>,
      <Footercomp></Footercomp>
    ];
  }
}

export default App;
