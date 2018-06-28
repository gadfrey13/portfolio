import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
const styles = theme => ({
    media: {
        width: '100%',
        paddingTop: '56.25%'
       
    },
    card: {
        width: '100%',
        background: '#42eef4',
    }
})

const ProfileCard = (props) => {
    const {classes} = props
    return (
        <div>
           <Card raised className={classes.card} >
                <CardMedia
                className={classes.media}
                image="https://avatars3.githubusercontent.com/u/18605878?s=400&u=43ce2aa03beb74884ac1270974cd019823abcfc5&v=4"
                title="Contemplative Reptile"/>
                <CardHeader title="Gadfrey Balacy" subheader="Java Developer and Web Developer"/>
           </Card>
        </div>
    )
}

export default withStyles(styles)(ProfileCard);