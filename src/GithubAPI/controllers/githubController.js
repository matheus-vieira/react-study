const axios = require('axios');
const User = require('@models/User');
const Repo = require('@models/Repo');

const githubController = function () {

    const GitHubAPIURL = 'https://api.github.com/users';

    async function makeCall(url, ClassObj) {
        let r = await axios.get(url);

        if (ClassObj) 
            return r.data.map(u => new ClassObj(u));

        return r.data;
    }

    async function getUsers(since) {
        let url = GitHubAPIURL;
        if (since) url += '?since=' + since;
        return await makeCall(url, User);
    }

    async function getUserDetails(username) {
        if (!username)
            return 'An username must be provided';
        return await makeCall(GitHubAPIURL + '/' + username);
    }

    async function getUserRepos(username) {
        if (!username)
            return 'An username must be provided';
        return await makeCall(GitHubAPIURL + '/' + username + '/repos', Repo);
    }

    return {
        getUsers: getUsers,
        getUserDetails: getUserDetails,
        getUserRepos: getUserRepos
    }
};

module.exports = githubController();