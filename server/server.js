
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');


// Route includes
const userRouter = require('./routes/user.router');
const characterRouter = require('./routes/character.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors jazz
//this will allow specified localhosts to interact with local server!!!
app.use((req,res, next)=>{
  res.header('Access-Control-Allow-Origin',"http://localhost:19006");
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/character', characterRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
//set to run at expo server location
const hostname = 'localhost'
const PORT = process.env.PORT || 5000;


/** Listen * */
app.listen(PORT,hostname, () => {
  console.log(`Listening on: ${hostname}:${PORT}`);
});
