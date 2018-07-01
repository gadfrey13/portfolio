import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../components/header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/header/NavBar'
import { Toolbar, Typography } from '@material-ui/core';
import Route from '../components/route/Route';
import Particle from 'react-particles-js';
import AnimationSetting from '../components/animation/AnimationSetting';

const style = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: '-20'
}

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
        <Particle params={AnimationSetting} style={style} />
        <Route open={this.state.open} handleDrawer={this.handleDrawer}/>
      </Fragment>
    );
  }
}

export default App;
