const express = require('express');

const router = express.Router();

//Render the registration form on the path /register
router.get('/', (req, res)=>{
    res.render('signup')
})



//eport routes.
module.exports = router;
