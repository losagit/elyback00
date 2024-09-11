const { urlencoded } = require("express");

const express = require('express');
const app = express();
const { sequelize } = require('./models/index.js');

//setting
const PORT = process.env.PORT || 3000;

//middlware

app.use(express.json());
app.use(urlencoded({ extended: false}));

//routes

app.use(require('./routes/router.js'));

app.listen(PORT, function (){
    console.log(`server listen on http://localhost:${PORT}`);
    sequelize.authenticate().then(() => {
        console.log('Base de datos conectada')
    })
});
