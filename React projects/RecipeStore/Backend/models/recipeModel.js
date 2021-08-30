const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
    foodName:{
        type:String,
        required:true,
    },
    ingredients:{
        type:String,
        required:true,
    },
    id:{
        type:mongoose.Types.ObjectId,
        required:true,
    }
});

module.exports = mongoose.model('recipe',Recipe);