import express from 'express';
const router = express.Router();
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';

// Load user model

import User from '../../models/User.js';

//@route GET api/users/test

router.get('/test', (req, res) => {
  res.json({ msg: 'USER WORKING' });
});

// @route GET api/users/register

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) return res.status(400).json({ email: 'Email already exists' });

      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(15, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    })
    .catch(err => console.log(err));
});

export default router;
