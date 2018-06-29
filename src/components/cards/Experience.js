import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Work from '@material-ui/icons/Work'
import { Typography } from '@material-ui/core';
const styles = theme => ({
    card: {
        background: '#3292a8'
    },
    avg: {
        color: '#3292a8',
    },
    avatar: {
        background: 'white',
    },
    title: {
        color: 'white',
        fontSize: '1.5rem',
    },
    content: {
        color: '#f8f8ff'
    },
    exptitle: {
        color: 'white',
        fontSize: '1.25rem'
    },
    expbody: {
        color: 'white'
    }
})

const Experience = (props) => {
    const {classes} = props
    return (
        <Card raised className={classes.card}>
            <CardHeader
            classes={{title: classes.title}} 
            avatar={
            <Avatar className={classes.avatar}><Work className={classes.avg}
            /></Avatar>} 
            title="Experience"
            />
            <CardContent className={classes.content}>
                <Typography className={classes.exptitle} component='h3'>
                    Bounce Inc | Developer
                </Typography>
                <Typography className={classes.expbody}>
                Bounce-inc is a startup that is creating a platform in which inventors can collaborate. Users can create accounts to access this site's services. 
                Inventors can create projects and recruit members for their development teams. 
                Anyone can join projects they're interested in.
                </Typography>
                <br/>
                <Typography className={classes.exptitle} component='h3'>
                    Calpers
                </Typography>
                <Typography className={classes.expbody}>
                The project was web application kiosk in which guest at CalPers could use to find and contact employees. Also, provide guest direction to employees office. 
                Allow for employees to remove or limit the information shown in the kiosk. 
                The kiosk was created using PHP, Javascript, CSS, and MySql. During development, we use XAMPP as our server and database. 
                Also, we used GitHub for version control.
                </Typography>
                <br/>
                <Typography className={classes.exptitle} component='h3'>
                Battle Cars
                </Typography>
                <Typography className={classes.expbody}>
                A free for all game using a basic game engine called rage that was developed at sac state. 
                The game has the elements of game models, terrain, skybox, sound, animation, physics and multi-player option. 
                The multiplayer option is implemented by creating a local server and connecting to that server using IP and port number.
                </Typography>
                <br/>
                <Typography className={classes.exptitle} component='h3'>
                Genre Movie Identification
                </Typography>
                <Typography className={classes.expbody}>
                Modern movie classification using machine learning algorithm. 
                The dataset was a collection of 750 thousand tags written by 270 thousand users. We filtered that collection to a smaller sample of data to reduce training time. 
                The algorithm we use were Logistic Regression, Decision Tree, Neural Network from the python libraries pandas and sklearn.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(Experience);