import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import Game from './app/models/project.js';
import { getProjects, getProject, postProject, deleteProject } from './app/routes/project';

const app = express();
const port = process.env.PORT || 8080;

const options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000} },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/admin', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'))
db.once('open', function() {
    console.log("we're connected!");
});
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/client/dist'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route('/projects')

.post(postProject)

.get(getProjects);

app.route('/projects/:id')

.get(getProject)

.delete(deleteProject);

app.route('*').get((req, res)=> {
    res.sendFile('client/dist/index.html')
});

app.listen(port);

console.log(`listening on port ${port}`)
