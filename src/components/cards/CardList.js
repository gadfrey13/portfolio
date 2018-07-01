import React, { Fragment } from 'react';
import {withStyles} from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import gridlayout from './CardList.css';
import ProjectInfo from './ProjectInfo';

const styles = {
    container: {
        width: '100%',
        marginLeft: '0px'
    }
}

const CardList = (props) => {
    const {classes} = props;
    const card = ProjectInfo.map((val,i) => {
        return(
            <Grid key={val.id} item>
                <ProjectCard pic={val.image} title={val.title} body={val.body} link={val.link} prompt={val.prompt}/>
            </Grid>
        )
    })
    return (
        <div className="gridlayout">
        <Grid className={classes.container} container justify="space-around" align-items="center" spacing={24}>
            {card}
        </Grid>
        </div>
    )
}

export default withStyles(styles)(CardList);