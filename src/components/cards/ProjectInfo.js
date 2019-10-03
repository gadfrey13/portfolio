//Images 
import ficimage from './resources/images/rsz_fictionaluniversity.jpg'
import calpers from './resources/images/calpers.jpg';
import movie from './resources/images/Movie.jpg';
import cars from './resources/images/cars.jpg';
import classification from './resources/images/classification.jpg';
import evolutionary from './resources/images/evolutionary.jpg';
import landing from './resources/images/rsz_landing.jpg';
import robofriend from './resources/images/robofriends.jpg';
import facerecognition from './resources/images/FaceRecognition.jpg';
import starwars from './resources/images/starwars.JPG';
import weather from './resources/images/weather.JPG';

const ProjectInfo = [
    {
        id: 1,
        title: "Fictional University",
        body: "Created a dynamic website in which users can subscribe. Created custom post type using the WordPress API. Used JavaScript, jQuery and PHP to create a dynamic experience for users with the WordPress Rest API. Also, provide admin controls with the ability to modified pages and provide different privileges for users of the website",
        link: "https://gadfreyb.sgedu.site/",
        prompt: "To Website",
        image: ficimage
    },
    {
        id: 2,
        title: "Calpers",
        body: "The client wanted a web based kiosk. In which allowed guest to contact employees at the Calpers. The application also provided a means of employees to keep certain information being shown to guest.",
        link: "https://github.com/gadfrey13/Calpers",
        prompt: "Github Repository",
        image: calpers,
    },
    {
        id: 3,
        title: "Movie Genre Classification",
        body: "Movie classification using machine learning algorithm. The dataset was a collection of 750 thousand tags written by 270 thousand users. We filtered that collection to a smaller sample of data to reduce training time. The algorithm we use were Logistic Regression, Decision Tree, Neural Network from the python libraries pandas and learn.",
        link: "https://github.com/gadfrey13/Movie-Genre-Classification/blob/master/Movie%20Genre%20Classification/Deliverables/using%20tags%20to%20classify%20genres%20csc%20177.pdf",
        prompt: "Research Report",
        image: movie,
    },
    {
        id:4,
        title: "Battle Cars",
        body: "Battle Cars is a first person shooter last man standing with cars. The game was created using java and javascript and basic game engine called rage. The game also has multi player mode. But the multiplayer mode is very limited since the server and connection to the server was created by me. So it lacks the ability to be played in different networks. You can get the full intructions in how to set up the game in my github repository",
        link: "https://github.com/gadfrey13/Battle-Cars/tree/master/BattleCars",
        prompt: "Github Repository",
        image: cars,
    },
    {
        id:5,
        title: "Image Classification",
        body: "Using a neural network to identify images. A Neural Network is an artificial interconnected group of nodes, similar to a vast network of neurons in the brain. Each node represents an artificial neuron. In which neuron fires when a certain threshold is met. Like biological neurons, artificial neurons change the limit of the neurons to fire and the resistance of the connection between neurons. Also, the way artificial neuron networks learn is classified in three ways supervised learning, unsupervised learning and reinforcement learning. The one we are going to use for our project is supervised learning.",
        link: "https://github.com/gadfrey13/Image-Classification/tree/master/Neural%20Network",
        prompt: "Github Repository",
        image: classification,
    }, 
    {
        id:6,
        title: "Evolutionary Computation",
        body: "For this project we are learning about Evolutionary Computation. Evolutionary computation is algorithms that are inspired by biology. It use biological concept such as selection, crossover, mutation and fitness. Selection is the probability that any given “individual” in a population gets selected. ",
        prompt: "Github Repository",
        link: "https://github.com/gadfrey13/Evolutionary-Computation/tree/master/Evolutionary%20Computation",
        image: evolutionary
    },
    {
        id:7,
        title: "Landing Page",
        body: "This is a landing page that allow users to subscribe to a mailing list using MailChimp.",
        prompt: "Website Link",
        link: "https://gadfrey13.github.io/",
        image:landing
    },
    {
        id:8,
        title: "Robo Friends",
        body: "This was to practice creating react websites and practice using rest apis in react.",
        link: "https://gadfrey13.github.io/robofriends/",
        prompt: "Website Link",
        image: robofriend
    },
    {
        id:9,
        title: 'Smart Brain',
        body: 'Practice using rest apis, node.js, postgreSQL,react, redux, heroku and others. Note. Initial start is slow. Reason using hobby-dev servers from heroku. ',
        link: 'https://recognitionsmartbrain.herokuapp.com/',
        prompt: 'Website Link',
        image: facerecognition
    },
    {
        id:10,
        title: 'Starwars',
        body: 'Starwars Characters practicing with rest apis and react',
        link: 'https://gadfrey13.github.io/starwars/',
        prompt: 'Website Link',
        image: starwars
    },
    {
        id:11,
        title: 'Weather App',
        body: 'An application the tells a cityies current weather and its five day weather forecast. Technology use rest apis, node.js, postgreSQL,react, redux, heroku and others. Server is hosted on heroku and front-end is hosted on github ',
        link: 'https://gadfrey13.github.io/weather',
        prompt: 'Website Link',
        image: weather
    }
]


export default ProjectInfo;