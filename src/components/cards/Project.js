import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Inbox from '@material-ui/icons/Inbox'
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

const Project = (props) => {
    const {classes} = props
    return (
        <Card raised className={classes.card}>
            <CardHeader
            classes={{title: classes.title}} 
            avatar={
            <Avatar className={classes.avatar}><Inbox className={classes.avg}
            /></Avatar>} 
            title="Projects"
            />
            <CardContent className={classes.content}>
                <Typography className={classes.exptitle} component='h3'>
                   Fictional University
                </Typography>
                <Typography className={classes.expbody}>
                My goal for this project was to learn more about Wordpress and its architecture. During this project, I learn about how to create my own post types and work with the WordPress rest API.
               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                   Landing Page
                </Typography>
                <Typography className={classes.expbody}>
                To create a landing page and allow users to subscribe to a mailing list using MailChimp.
               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                   Image Classfication
                </Typography>
                <Typography className={classes.expbody}>
                 Using a neural network to identify images. A Neural Network is an artificial interconnected group of nodes, similar to a vast network of neurons in the brain. Each node represents an artificial neuron. In which neuron fires when a certain threshold is met. Like biological neurons, artificial neurons change the limit of the neurons to fire and the resistance of the connection between neurons. Also, the way artificial neuron networks learn is classified in three ways supervised learning, unsupervised learning and reinforcement learning. The one we are going to use for our project is supervised learning.
               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                  Evolutionary Computation
                </Typography>
                <Typography className={classes.expbody}>
                For this project we are learning about Evolutionary Computation. Evolutionary computation is algorithms that are inspired by biology. It use biological concept such as selection, crossover, mutation and fitness. Selection is the probability that any given “individual” in a population gets selected. The crossover is the parts in which genetic coding is exchange between the parents to create new “children”. Mutation is the probability that a change in the “dna” happens to a individual. Fitness is how well is the individual “genes” is fit for a certain setting.     
In the 1st part, the genetic algorithm project we are tasked to find the global minimum (or maximum). For a given function. That function must have at least have one or more local minimum.
In the 2nd part of the project we are tasked to find the genetic programming. We find the genetic programming using tools clojure, lein and fungp. We use this tools to generate a function based on inputs that we provided the program. This part of the project comes in two parts. Part 1 of the project it uses our function from the first part. To derived inputs for the programming language. We do that to see if the program generates a similar function based on the inputs. The second part of the project sees if we can generate another function but instead of the inputs being provided by another function. We are provided we a set of training data for the program.

               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                  Robofriends
                </Typography>
                <Typography className={classes.expbody}>
                Goal of this project was to get better at using react.js framework and as well as to improve my ability to work with
                rest api.
               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                  Starwars
                </Typography>
                <Typography className={classes.expbody}>
                The goal of this project was to get better understanding rest Api. Also, to get better understanding of react framework. 
               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                  SmartBrain
                </Typography>
                <Typography className={classes.expbody}>
                 Smartbrain is a web app the uses CLAIRAI API. That detects faces on pictures. The technology I use to create this 
                 app. Are react.js, redux, node.js, postgresSQL, heroku, cors, knex, express and bcrypt. Also, i created my own rest api 
                 to connect the front end to the database.
               </Typography>
               <br/>
               <Typography className={classes.exptitle} component='h3'>
                  Weather App
                </Typography>
                <Typography className={classes.expbody}>
                 Weather App is a web app the uses OpenWeather API. The web app provides the current weather and a five day forecast. It also allows you to 
                 create an account so you can save prior weather querys. The technology I use to create this 
                 app. Are react.js, redux, node.js, postgresSQL, heroku, cors, knex, express and bcrypt. Created my own rest apis to connect front end to backend.
               </Typography>

            </CardContent>
        </Card>
    )
}

export default withStyles(styles)(Project);