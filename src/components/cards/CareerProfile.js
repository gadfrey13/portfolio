import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
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
    }
})

const CareerProfile = (props) => {
    const {classes} = props
    return (
        <Card className={classes.card}>
            <CardHeader
            classes={{title: classes.title}} 
            avatar={
            <Avatar className={classes.avatar}><AccountCircle className={classes.avg}
            /></Avatar>} 
            title="Career Profile"
            />
            <CardContent className={classes.content}>
            Experience in Java programming and web development. Graduated from California State University, Sacramento with a Bachelor of Science(B.S) Computer Science with a certificate in Game Engineering.  For senior project created a web platform for a startup based in Sacramento, California. Since graduating from Sacramento State have started improving my skills for web development with an emphasis on WordPress platform. During my stay at Sacramento State, the electives I chose to take were: Intelligent Systems, Data Warehousing and Data Mining, Advanced Computer Graphics and Computer Game Architecture and Implementation. 
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(CareerProfile);