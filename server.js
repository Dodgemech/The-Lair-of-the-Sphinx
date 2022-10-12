//Requirements for Sequelize
const sequelize = require('./config/connection');
//Requirements for Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
//<><><><><><><><><><><><><><><><><><><><><><><><><><><>




//Sets up sequelize and starts server
sequelize.sync({ force:false }).then(()=> {
    app.listen(PORT, () => console.log(`
o======={=============================================>

            SERVER IS ON AT ${PORT}

          Let's slay some monsters!
    
<=============================================}=======o
    `));
});