
//Requirements for Sequelize
const sequelize = require('./config/connection');
//Requirements for Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
//Requirements for routers
const routes = require('./controllers/');
//<><><><><><><><><><><><><><><><><><><><><><><><><><><>

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