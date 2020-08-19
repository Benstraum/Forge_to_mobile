
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
app.use(cors());
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const characterRouter = require('./routes/character.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
const PORT =19006 || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
