import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import School from '@material-ui/icons/School';
import Email from '@material-ui/icons/Email';
import Description from '@material-ui/icons/Description';

const history = createBrowserHistory();
const DrawerList = (props) => {
    const {classes} = props;
    return (
        <Router history={history}>
        <List> 
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <Home  color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button component={Link} to="/resume">
                <ListItemIcon>
                    <Description/>
                </ListItemIcon>
                <ListItemText primary="Resume"/>
            </ListItem>
            <ListItem button component={Link} to="/Education">
                <ListItemIcon>
                    <School/>
                </ListItemIcon>
                <ListItemText primary="Education"/>
            </ListItem>

            <ListItem button component={Link} to="/contact">
                <ListItemIcon>
                    <Email/>
                </ListItemIcon>
                <ListItemText primary="Contact"/>
            </ListItem>

        </List>
        </Router>
    )
}

export default DrawerList;