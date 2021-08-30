const express = require('express');
const router = express();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Recipe = require('../models/recipeModel');
const JWT = require('jsonwebtoken');
const cors = require('cors');

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.use(cors());

// Home page
router.get('/',(req,res)=>{
    res.status(200).send('This is home page');
})

// For signUp
router.post('/signup',(req,res)=>{ 
    let {fullName,email,password} = req.body;
    let user = new User({
        fullName,
        email,
        password,
    });
    user.save().then(() => {
        let token = getToken(user);
        res.status(200).send({user,token});
    }).catch((error) => {
        console.log(error);
        res.status(404).send('Something is not right');
    });
})

// For Login
router.post('/login',(req,res)=>{ 
    let { email, password } = req.body;
    if (email!=null && password!=null){
    User.findOne({ email: email }).then((user) => {
        if (password == user.password) {
            let token = getToken(user);
            return res.status(200).send({user, token});
        }
        return res.status(401).send('Your password is incorrect');
    }).catch((error) => {
        console.log(error);
        return res.status(404).send('Your email and password is incorrect');
    });
}
})

// Token validation
router.post('/tokenValidation',(req,res)=>{
    let {token,email} = req.body;
    try{
        if(token!==null && email!==null){
            let decodedToken = JWT.verify(token,'recipe_Store');
            if (decodedToken.email === req.body.email) {
                return res.status(200).send({valid:true});
              }
            return res.status(200).send({valid:false});
        }
        return res.status(200).send({valid:false});
    }
    catch{
        return res.status(200).send({valid:false});
    }
})

// Add recipe
router.post('/postRecipe',(req,res)=>{
    let {foodName, ingredients,id} = req.body;
    let recipe = Recipe({
        foodName,
        ingredients,
        id,
    })
    recipe.save().then(()=>{
        return res.status(200).send(recipe);
    }).catch((error)=>{
        console.log(error);
    })
})

// Get Recipe by Id
router.get('/userRecipe:id',(req,res)=>{
    let { id } = req.params;
    id = mongoose.Types.ObjectId(id);
    Recipe.find({id:id}).then((recipe)=>{
        return res.status(200).send(recipe);
    }).catch((error)=>{
        console.log(error);
        return res.status(404).send('Something is not right');
    })
})

// Delete Recipe
router.delete('/deleteRecipe',(req,res)=>{
    let {id, foodName, ingredients} = req.body;
    id = mongoose.Types.ObjectId(id);
    Recipe.findOneAndDelete({id:id,foodName:foodName,ingredients:ingredients}).then(()=>{
        return res.status(200).send();
    }).catch((error)=>{
        console.log(error);
        return res.status(404).send('something is not right')
    })
})

// Change Recipe
router.put('/changeRecipe',(req,res)=>{
    let {id,foodName,ingredients,prevIngredients} = req.body;
    id = mongoose.Types.ObjectId(id);
    Recipe.updateOne({id:id,foodName:foodName,ingredients:prevIngredients},{ ingredients:ingredients }).then((recipe)=>{
        return res.status(200).send();
    }).catch((error)=>{
        console.log(error);
        return res.status(404).send('something is not right')
    })
})

// Show all recipe
router.get('/allRecipe',(req,res)=>{
    Recipe.find().then((recipe)=>{
        return res.status(200).send(recipe);
    }).catch((error)=>{
        console.log(error);
        return res.status(404).send('Something is not right');
    })
})

function getToken(user) {
    return JWT.sign(
        {
            email: user.email,
        },
        "recipe_Store",
        {
            expiresIn: "3d",
        }
    )
} 
 
module.exports = router; 