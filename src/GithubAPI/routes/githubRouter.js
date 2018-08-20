const express = require('express');
const axios = require('axios');

const githubRouter = express.Router();

const GitHubAPIURL = 'https://api.github.com/users/';

/*
 * GET - /api/users?since={number}
 * This endpoint must return a list
 * of GitHub users and the link for the next page.
 */
githubRouter.route('/users')
    .get(function (req, res) {
        let url = GitHubAPIURL;

        if (req.query && req.query.since)
            url += '?since=' + req.query.since;

        axios.get(url)
            .then(r => res.send(r.data))
            .catch(e => console.log(e));
    });

/*
 * GET -  /api/users/:username/details
 * /api/users/mojombo/details
 * 
 * This endpoint must return the details of a GitHub user
 */
githubRouter.route(' /users/:username/details')
    .get(function (req, res) {
        axios.get(GitHubAPIURL + '/' + req.params.username)
            .then(r => res.send(r.data))
            .catch(e => console.log(e));
    });

/*
 * GET -  /api/users/:username/repos
 * This endpoint must return the details of a GitHub user
 */
githubRouter.route(' /users/:username/repos')
    .get(function (req, res) {
        console.log("oi");
        axios.get(GitHubAPIURL + '/' + username + '/repos')
            .then(r => res.send(r.data))
            .catch(e => console.log(e));
    });


module.exports = githubRouter;