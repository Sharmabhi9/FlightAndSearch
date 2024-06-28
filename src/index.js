const express = require('express');
const { PORT } = require('./config/serverconfig'); // Adjust the path if necessary

const setupAndStartServer = async () => {
    const app = express();
    const PORT=3000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
       // console.log(process.env);
    });
};

setupAndStartServer();
