const express = require("express");
const Agent = require("../models/regModel");
const router = express.Router();
// const bodyParser = require("body-parser");

// Set the middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Render the registration form on the path /register
router.get("/", (req, res) => {
  res.render("signup");
});

//Route for submitting information form the registration form
router.post("/", (req, res) => {
  const myData = new Agent(req.body);
  myData.save();
  res.redirect("/form");
  // .then(item => {
  //   Agent.find().then(items => {
  //     console.log("Data Saved to Database Successfully");
  //     res.redirect("/form");
  //   });
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.status(400).send("unable to save to database");
  // });
});

//
// route for returning a specific page
router.get("/list", async (req, res) => {
  if (req.session.user) {
    //console.log(req.session.user)

    //let allows for variable reassignment
    const items = await Agent.find();
    res.render("list", { agents: items, currentUser: req.session.user });
  } else {
    res.redirect("/form");
  }
});
//export routes.
module.exports = router;
