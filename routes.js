const routes = require('next-routes')();

routes
.add('/leaderboard' , 'leaderboard' )
.add('/campaigns/new' , '/campaigns/new')
.add('/campaigns/:address' , '/campaigns/show' )
.add('/campaigns/:address/requests' , '/campaigns/requests/index')
.add('/campaigns/:address/requests/new' , '/campaigns/requests/new')
.add('/compete/newproblem' , '/compete/newproblem')
.add('/compete/home' , '/compete/home' )
.add('/compete/:address' , '/compete/showproblem' )
.add('practice/home', '/practice/home')



module.exports = routes;