import React, { Fragment, Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  header: {
    backgroundColor: '#3292a8',
    width: '100%',
  },
  list: {
    width: 225,
  },
  fullList: {
    width: 'auto',
    backgroundColor: '#008ba3',
  },

  drawer: {
    backgroundColor: 'rgba(55, 136, 230, 0.5)',
  }
 
});



class NavBar extends Component {
  


  render(){
    const { classes,handleDrawer } = this.props;

    return (
      <div>
        <AppBar className={classes.header} position="static" color="primary">
          <Toolbar>
          <IconButton
              className= "hold"
              color="inherit"
              aria-label="Menu"
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Gadfrey Balacy Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
};

export default  withStyles(styles)(NavBar);
