require('module-alias/register');
const express = require('express');
const githubRouter = require('@routes/githubRouter');

const app = express();

const port = process.env.PORT || 3000;

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', '*');

    next();
}
app.use(allowCrossDomain);
app.use('/api', githubRouter);
app.get('/', (req, res) => res.send('Welcome to my API'));
app.listen(port, () => console.log('Gulp is running my app on PORT: ' + port));