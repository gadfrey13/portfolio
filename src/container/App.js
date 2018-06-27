import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/header/NavBar'
import { Toolbar, Typography } from '@material-ui/core';
import CardList from '../components/cards/CardList'
class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline/>      
        <NavBar />
        <CardList/>
      </Fragment>
    );
  }
}

export default App;
