import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Github from '../icon/Github';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './ContactList.css';
const styles = theme => ({
  text : {
      padding: 0,
      color: 'white',
  },
  list: {
      paddingLeft: '6px',
      paddingRight: '6px',
  },
  icon: {
      color: 'white'
  }
})


const ContactList = (props) => {
    const {classes} = props
    return (
        <div>
            <List>
                <ListItem className={classes.list}>
                    <ListItemIcon color='primary'>
                        <Email className={classes.icon}/>
                    </ListItemIcon>
                    <Typography className={classes.text}>
                        <div className="text">
                            gadfreybalacy@gmail.com
                        </div>
                    </Typography>
                </ListItem>
                <ListItem className={classes.list}>
                    <ListItemIcon color='primary'>
                        <Phone className={classes.icon}/>
                    </ListItemIcon>
                    <Typography className={classes.text}>
                        <div className="text">
                            (209) 676-9998
                        </div>
                    </Typography>
                </ListItem>
                <ListItem className={classes.list}>
                    <ListItemIcon color='primary'>
                        <Github className={classes.icon}/>
                    </ListItemIcon>
                    <Typography className={classes.text}>
                        <div className="text">
                        https://github.com/gadfrey13
                        </div>
                    </Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default withStyles(styles)(ContactList);

