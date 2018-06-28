import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './Resume.css';
import ProfileCard from '../cards/ProfileCard';
import ContactList from '../contactlist/ContactList';
const styles = theme => ({
    paper: {
        maxWidth: '960px'
    },
    container:{
      marginTop: '10px',
      width: '100%',
    },
    width:{
        width: '100%',
    },
    main: {
        background: '#3292a8'
    },
    side: {
        background: '#3292a8'
    },

    addmargin:{
        marginTop: '16px',
    },

    removePadding:{
        padding: '0px',
    },

    cont: {
        maxWidth: '100%',
        margin: '0px'
    }
})

const Resume = (props) => {
    const {classes} = props
    return (
       <div className="container">
           
            <Grid className={classes.container} container  justify='center' >
                <Paper className={classes.paper}>
                <Grid  className={classes.cont} container direction='row' wrap='wrap' spacing={16}>
                    <Grid  item xs={12} md={3} lg={3} xl={3}>

                        <Grid container >
                            <Grid item xs={12} md={12} lg={12} xl={12}>
                                 <ProfileCard /> 
                            </Grid>
                            
                            <Grid className={classes.addmargin} item xs={12} md={12} lg={12} xl={12}>
                                <Paper className={classes.side}>
                                    <ContactList />
                                 </Paper>
                            </Grid>
                        </Grid>


                     </Grid>

                     <Grid item xs={12} md={9} lg={9} xl={9} >
                        <Paper className={classes.main}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint harum asperiores laborum, totam tempora sed placeat, eos et soluta ipsum a quo illum dicta natus aliquid recusandae vitae consequatur.
                        </Paper>
                     </Grid>
                </Grid>
                </Paper>
           </Grid>
       
       </div>
    )
}

export default withStyles(styles)(Resume);