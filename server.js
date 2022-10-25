require('dotenv').config();

//Requirements for Sequelize
const sequelize = require('./config/connection');
//Requirements for Express
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

// config for handlebars
    //Helper functions for handlebars
    const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
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


// Allows public folder to be used
app.use(session(sessionSettings));
app.use(express.static(path.join(__dirname, 'public')));

// TEST FOR IMAGES

// app.use(express.static('public/images'));
// app.get("/dynamic", (req, res) => {
//     imageList = [];
//     imageList.push({ src: "icons/flask.png", name: "flask" });
//     imageList.push({ src: "icons/javascript.png", name: "javascript" });
//     imageList.push({ src: "icons/react.png", name: "react" });
//     res.render("dynamic", { imageList: imageList });
// });




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Sets up sequelize and starts server <><><><><><><><><>
sequelize.sync({ force: true }).then(()=> {
    app.listen(PORT, () => console.log(`
o======={=============================================>

            SERVER IS ON AT ${PORT}

          Let's slay some monsters!
    
<=============================================}=======o
    `));
});