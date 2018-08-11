'use strict';

var routes = require('next-routes')();

routes.add('/leaderboard', 'leaderboard').add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new').add('/compete/newproblem', '/compete/newproblem').add('/compete/home', '/compete/home').add('/compete/:address', '/compete/showproblem').add('practice/home', '/practice/home');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLGdCQUNzQixBQUR0QixlQUVDLEFBRkQsSUFFSyxBQUZMLGtCQUV3QixBQUZ4QixrQkFHQyxBQUhELElBR0ssQUFITCx1QkFHNkIsQUFIN0IsbUJBSUMsQUFKRCxJQUlLLEFBSkwsZ0NBSXNDLEFBSnRDLDZCQUtDLEFBTEQsSUFLSyxBQUxMLG9DQUswQyxBQUwxQywyQkFNQyxBQU5ELElBTUssQUFOTCx1QkFNNkIsQUFON0IsdUJBT0MsQUFQRCxJQU9LLEFBUEwsaUJBT3VCLEFBUHZCLGlCQVFDLEFBUkQsSUFRSyxBQVJMLHFCQVEyQixBQVIzQix3QkFTQyxBQVRELElBU0ssQUFUTCxpQkFTc0IsQUFUdEI7O0FBYUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2JyMDAwMy9Eb2N1bWVudHMvZXRoZXJldW0tYmxvY2tjaGFpbi9vbmxpbmVKdWRnZSJ9