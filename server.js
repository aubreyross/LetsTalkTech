//import required packages
const path = require('path');
//backend framework for node.js
const express = require('express');
//authentication
const session = require('express-session');
//templating language
const exphbs = require('express-handlebars');
//ORM
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//requires utils + controllers folder
const helpers = require('./utils/helpers');
const routes = require('./controllers');

//create express.js server
const app = express();
const PORT = process.env.PORT || 3001;

//set handlebars.js with helpers
const hbs = exphbs.create ({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

//informs express which template engine to utilize
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set public folder path to static path
app.use(express.static(path.join(__dirname, 'public')));

//variable for routes 
app.use(routes);

//run server on localhost 3001
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to http://localhost:${PORT}`));
});
