import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/header/NavBar'
import { Toolbar, Typography } from '@material-ui/core';
import Route from '../components/route/Route';
class App extends Component {

  constructor(){
    super()
    this.state = {
      open: false,
    }
  }

  handleDrawer = (event) => {
     let bol = !this.state.open;
     this.setState({open: bol})
  }


  render() {
    return (
      <Fragment>
        <CssBaseline/>      
        <NavBar handleDrawer={this.handleDrawer} />
        <Route open={this.state.open} handleDrawer={this.handleDrawer}/>
      </Fragment>
    );
  }
}

export default App;
