require('module-alias/register');
const should = require('should');

describe('Github Controller Tests', function () {
    describe('Get Users', function () {
        it('should get Github users', async function () {
            const githubController = require('@controllers/githubController');
            let list = await githubController.getUsers();

            list.should.be.an.Array();
        });
    });
    describe('Get Users Details', function () {
        it('Check if a username is provided', async function () {
            const githubController = require('@controllers/githubController');
            let list = await githubController.getUserDetails();

            should.equal(list, 'An username must be provided');
        });

        it('Check details for "matheus-vieira" user', async function () {
            const githubController = require('@controllers/githubController');
            let details = await githubController.getUserDetails("matheus-vieira");

            details.should.be.an.Object();
        });
    });
    describe('Get Users Repos', function () {
        it('Check if a username is provided', async function () {
            const githubController = require('@controllers/githubController');
            let list = await githubController.getUserRepos();

            should.equal(list, 'An username must be provided');
        });

        it('Check repos for "matheus-vieira" user', async function () {
            const githubController = require('@controllers/githubController');
            let list = await githubController.getUserRepos("matheus-vieira");

            list.should.be.an.Array();
        });
    });
});