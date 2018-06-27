import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card'
import {withStyles} from '@material-ui/core/styles'
import { CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

// const primary = red[500]; // #F44336
// const accent = purple['A200']; // #E040FB
// const accent2 = purple.A200; // #E040FB (alternative method)

const styles= theme =>({
    card:{
        maxWidth: 300,
        position: 'center',
    },
    media: {
        height:0,
        paddingTop: '56.25%',
        position: 'center',
        backgroundPosition: 'center center'
    },
    title: {
        fontSize: 20,
        color: theme.palette.primary.light
    }
})

const ProjectCard = (props) => {
    const{classes,pic,title,body,link,prompt} = props;
   
    return (
        <Fragment>
            <Card className={classes.card} raised={props.bol} styles={styles}>
                <CardMedia 
                className={classes.media}
                image= {pic}
                title= {title}
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom varient="headline" component="h2">
                        {title}
                    </Typography>
                    <Typography>
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button  size="small" color="primary" href={link} target="_blank">{prompt}</Button>
                </CardActions>
            </Card>
        </Fragment>
    )
}

export default withStyles(styles)(ProjectCard);