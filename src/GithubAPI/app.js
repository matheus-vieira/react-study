require('module-alias/register');
const express = require('express');
const githubRouter = require('@routes/githubRouter');

const app = express();

const port = process.env.PORT || 3000;

app.use('/api', githubRouter);
app.get('/', (req, res) => res.send('Welcome to my API'));
app.listen(port, () => console.log('Gulp is running my app on PORT: ' + port));