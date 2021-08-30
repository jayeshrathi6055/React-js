const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');

// Convert json into object
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Connection to mongodb
mongoose.connect('mongodb://localhost:27017/recipe_store',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log('connection successful');
}).catch(()=>{
    console.log('connection unsuccessful');
});

app.use(userRouter);

// Establish port server
app.listen(8000,()=>{
    console.log('Your port link is - http://localhost:8000/');
})