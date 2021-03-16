const path= require("path");
const express= require('express');


const postRoutes = require('./route/posts');

const bodyParser= require('body-parser');

const mongoose= require('mongoose');




const Post= require('./models/post')

const app= express();

const userRoutes= require('./route/user');



// mongodb+srv://dapo:<password>@cluster0.5mjd2.mongodb.net/<dbname>?retryWrites=true&w=majority



mongoose.connect("mongodb+srv://dapo:xXVfbZfuwu6o41tV@cluster0.5mjd2.mongodb.net/node-angular?retryWrites=true", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {

    console.log('Connected to database');

})
.catch(() => {

    console.log('Connection Failed');
});




//   local

// mongoose.connect('mongodb://localhost:27017/mydatabasename', {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {

//         console.log('Connected to database');

//     })
//     .catch(() => {

//         console.log('Connection Failed');
//     });;



// To use body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Make image dir accessible - any request targeting '/images' will be allowed to continue to fetch file
// require path

app.use("/images", express.static(path.join("backend/images")));


// to make sure we have api in front of this route to signin , login user

app.use("api/user", userRoutes);



// disable Cors

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPYIONS");

    next();
})



app.use('/api/posts', postRoutes);



module.exports= app;
