import React, { Fragment, Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import DrawerList from '../drawerlist/DrawerList';

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary,
    width: '100%'
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



  render(){
    const { classes } = this.props;
    const sideList = (
      // <div className={classes.list}>
      //   <List>{mailFolderListItems}</List>
      //   <Divider />
      //   <List>{otherMailFolderListItems}</List>
      // </div>
      <div className={classes.list} >
        <DrawerList />
      </div>
    );

    return (
      <Fragment>
        <AppBar className={classes.header} position="static" color="primary">
          <Toolbar>
          <IconButton
              className= "hold"
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Gadfrey Balacy Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} open={this.state.open} onClose={this.handleDrawer} >
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleDrawer}
            onKeyDown={this.handleDrawer}
          >
          {sideList}
          </div>
        </Drawer>
      </Fragment>
    )
  }
};

export default  withStyles(styles)(NavBar);
