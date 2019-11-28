const express = require('express');

const router = express.Router();
const Register = require("../models/regModel");


//Render the login form on the path /form
router.get('/', (req, res) => {
    res.render('login');
})
//

// submits login infromation
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const user = await Register.authenticate(req.body.username, req.body.password)
        console.log(user)
        req.session.user = user;
        res.redirect('/register/list')
    }
    catch (err) {

        res.render('login', { error: 'failed to log please try again' })
        console.log(err)
    }
}
)




//eport routes.
module.exports = router;
