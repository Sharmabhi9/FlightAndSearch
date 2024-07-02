const express = require('express');
const bodyparser=require('body-parser');
const { PORT } = require('./config/serverconfig'); 
const cityrepository=require('./Repository/city-repository');
const setupAndStartServer = async () => {
    const app = express();
   
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
       // console.log(process.env);
    });
};

setupAndStartServer();
