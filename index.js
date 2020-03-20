import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//bodyParser middleware
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
import mongoURI from './config/keys.js';
// console.log(mongoURI);
const db = mongoURI.mongoURI;

// routes
import users from './routes/api/users.js';
import profile from './routes/api/profile.js';
import posts from './routes/api/posts.js';

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to mongodb'))
  .catch(() => console.log(err));

//use routes

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
