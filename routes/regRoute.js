const express = require('express');
const Agent = require('../models/regModel')
const router = express.Router();

//Render the registration form on the path /register
router.get('/', (req, res)=>{
    res.render('signup')
})


//Route for submitting information form the registration form
router.post('/', (req, res) => {
    const myData = new Agent(req.body)
    myData.save()
        .then(item => {
            Agent.find().then(
                items => {
                    console.log("Data Saved to Database Successfully");
                    res.render('list', { agents: items })
                })
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
});


//export routes.
module.exports = router;
