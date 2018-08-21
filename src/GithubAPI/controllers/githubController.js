const axios = require('axios');
const User = require('@models/User');
const Repo = require('@models/Repo');

const githubController = function () {

    const GitHubAPIURL = 'https://api.github.com/users';

    function makeCall(res, url, ClassObj) {
        axios.get(url)
            .then(r => !ClassObj ? r.data : r.data.map(u => new ClassObj(u)))
            .then(r => res.send(r))
            .catch(e => res.send(e));
    }

    function getUsers(req, res) {
        let url = GitHubAPIURL;

        if (req.query && req.query.since)
            url += '?since=' + req.query.since;

        makeCall(res, url, User);
    }

    function getUserDetail(req, res) {
        if (!req.params.username || !req.params.username)
            return res.send("A username must be provided /api/users/:username/details");
        makeCall(res, GitHubAPIURL + '/' + req.params.username);
    }

    function getUserRepos(req, res) {
        if (!req.params.username || !req.params.username)
            return res.send("A username must be provided /api/users/:username/repos");
        makeCall(res, GitHubAPIURL + '/' + req.params.username + '/repos', Repo);
    }

    return {
        getUsers: getUsers,
        getUserDetail: getUserDetail,
        getUserRepos: getUserRepos
    }
};

module.exports = githubController();