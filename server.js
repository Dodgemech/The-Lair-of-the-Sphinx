require('dotenv').config();
//Requirements for Sequelize
const sequelize = require('./config/connection');
//Requirements for Express
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

// config for handlebars
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
//Requirements for routers
const routes = require('./controllers/');
//<><><><><><><><><><><><><><><><><><><><><><><><><><><>

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
};

// we set up handlebars and connect it with express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sessionSettings));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Sets up sequelize and starts server <><><><><><><><><>
sequelize.sync({ force:false }).then(()=> {
    app.listen(PORT, () => console.log(`
o======={=============================================>

            SERVER IS ON AT ${PORT}

          Let's slay some monsters!
    
<=============================================}=======o
    `));
});