const express = require("express");

const router = express.Router();
// Load user model

const User = require("../../models/Users");

//@route GET api/users/test

router.get("/test", (req, res) => res.json({ msg: "user works" }));

// @route GET api/users/register

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
