import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Computer from '@material-ui/icons/Computer'
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
    av: {
        fontSize: '8.0rem'
    },
    content: {
        color: '#f8f8ff'
    },
    exptitle: {
        color: 'white',
        fontSize: '1.25rem'
    },
    label: {
        color: '#3292a8'
    },
    chip: {
        background: 'white',
        margin: '2px'
    }
});

const SkillsCard = props => {
    const {classes} = props

    return (
        <Card className={classes.card}>
            <CardHeader 
            classes={{title: classes.title, avatar: classes.av}} 
            avatar={
            <Avatar className={classes.avatar}><Computer className={classes.avg}
            /></Avatar>} 
            title="Skills"
            />
            <CardContent>
                <Chip classes={{label: classes.label}} label="Java" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="Javascript" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="React.js" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="HTML5" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="CSS3" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="Git" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="Angular 4" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="Material.ui" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="Python" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="PHP" className={classes.chip}/>
                <Chip classes={{label: classes.label}} label="WordPress" className={classes.chip}/>
            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(SkillsCard);