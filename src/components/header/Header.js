import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline } from "@material-ui/core";

const Header = (props) => {
    const { classes } = props;
  return (
    <Fragment>
      <AppBar position='sticky'>
        <Toolbar>
          <IconButton
            className= "hold"
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="flex">
            
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
