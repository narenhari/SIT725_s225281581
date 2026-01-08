var express = require("express");
var app = express();
const mongoose = require('mongoose');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// REMOVED: const socket = io(); <-- This was causing your "ReferenceError"

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {});

const cardList = [
    {
        title: "Lion",
        image: "images/lion.jpg",
        link: "About Lions",
        description: "The lion (Panthera leo) is a large cat of the genus Panthera..."
    },
    {
        title: "Tiger",
        image: "images/tiger.png",
        link: "About Tigers",
        description: "The tiger (Panthera tigris) is a large cat and a member of the genus Panthera native to Asia..."
    },
    {
        title: "Elephant",
        image: "images/elephant.jpg",
        link: "About Elephant",
        description: "Elephants are the largest land mammals on earth..."
    }
];

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

mongoose.connection.once('open', async () => {
    console.log('Connected to MongoDB!');

    // FIX FOR DUPLICATE CARDS: 
    // Check if the collection is empty before inserting
    const count = await Project.countDocuments({});
    if (count === 0) {
        await Project.insertMany(cardList);
        console.log('Database seeded with initial cards.');
    }
});

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

let activeUsers = 0;

io.on('connection', (socket) => {
    activeUsers++;
    console.log('User connected');
    
    io.emit('userCount', activeUsers);

    socket.on('disconnect', () => {
        activeUsers--;
        console.log('User disconnected');
        io.emit('userCount', activeUsers);
    });
});

var port = process.env.port || 3000;
http.listen(port, () => {
    console.log("App listening to: " + port);
});