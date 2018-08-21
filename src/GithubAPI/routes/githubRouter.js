const express = require('express');
const githubRouter = express.Router();
const githubController = require("@controllers/githubController")

/*
 * GET - /api/users?since={number}
 * This endpoint must return a list
 * of GitHub users and the link for the next page.
 */
githubRouter.route('/users').get(githubController.getUsers);

/*
 * GET -  /api/users/:username/details
 * /api/users/mojombo/details
 * 
 * This endpoint must return the details of a GitHub user
 */
githubRouter.route('/users/:username/details').get(githubController.getUserDetail);

/*
 * GET -  /api/users/:username/repos
 * This endpoint must return the details of a GitHub user
 */
githubRouter.route('/users/:username/repos').get(githubController.getUserRepos);


module.exports = githubRouter;