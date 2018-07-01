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
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import CardList from '../cards/CardList';
import Resume from '../resume/Resume';
import { Card } from '@material-ui/core';
import BackgroundAnimation from '../animation/BackgrounAnimation';
const history = createBrowserHistory();

const styles = theme => ({
    drawer: {
        width: 225,
    }
})

const Routes = (props) => {
    const {classes,open, handleDrawer} = props;
    return (
        <Router history={history}>
        <div>        
        <Drawer className={classes.drawer} open={open} onClose={handleDrawer}>
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
        </List>
        </Drawer>
        <main>
            <Route exact path="/" component={CardList}/>
            <Route path="/resume" component={Resume} />
        </main>
        </div>
        </Router>
    )
}

export default withStyles(styles)(Routes);