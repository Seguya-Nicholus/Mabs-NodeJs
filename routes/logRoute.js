const express = require('express');

const router = express.Router();

//Render the login form on the path /form
router.get('/', (req, res) => {
    res.render('login');
})

//eport routes.
module.exports = router;
