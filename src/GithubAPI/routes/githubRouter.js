const express = require('express');
const githubRouter = express.Router();
const githubController = require("@controllers/githubController")

/*
 * GET - /api/users?since={number}
 * This endpoint must return a list
 * of GitHub users and the link for the next page.
 */
githubRouter.route('/users').get(async function(req, res) {
    let list = await githubController.getUsers(req.query.since);
    res.send(list);
});

/*
 * GET -  /api/users/:username/details
 * /api/users/mojombo/details
 * 
 * This endpoint must return the details of a GitHub user
 */
githubRouter.route('/users/:username/details').get(async function (req, res) {
    if (!req.params.username || !req.params.username)
        return res.send("A username must be provided /api/users/:username/details");

    let user = await githubController.getUserDetails(req.params.username);
    res.send(user);
});

/*
 * GET -  /api/users/:username/repos
 * This endpoint must return the details of a GitHub user
 */
githubRouter.route('/users/:username/repos').get(async function(req, res) {
    if (!req.params.username || !req.params.username)
        return res.send("A username must be provided /api/users/:username/repos");
    let list = await githubController.getUserRepos(req.params.username);
    res.send(list);
});


module.exports = githubRouter;