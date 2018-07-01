import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
const styles = theme =>({
    header: {
    },
    title:{
        color: '#ffffff',
        fontSize: '1.5rem'
    },
    card: {
        background: '#3292a8'
    },
    university:{
        color: '#ffffff'
    }
})

const EducationCard = props => {
    const {classes} = props;
    return (
        <div>
            <Card raised className={classes.card}>
               <CardContent>
                 <Typography className={classes.title}>
                    Education
                 </Typography>
                 <Typography className={classes.university}>
                    California State University, Sacramento
                 </Typography>
                 <Typography className={classes.university}>
                    Graduated: May 2018
                 </Typography>
               </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(EducationCard);