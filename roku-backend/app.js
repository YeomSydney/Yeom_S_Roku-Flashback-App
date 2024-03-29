const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
const router = require('./router/index');

app.use('/users', router);

app.listen(port, () => {
    console.log(`app is up and running on ${port}`)
})