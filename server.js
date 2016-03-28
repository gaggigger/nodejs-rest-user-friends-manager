var express = require( 'express' );
var app = express();
var routes = require( './confs/routes' );

var controllers = {
	user: require( './controllers/user' )
}

// Start service
function start() {
	routes.setup(app, controllers);

	var port = process.env.PORT || 8081;
	var server = app.listen( port );
	console.log( "Friends management app worker listening on port %d in %s mode", port, app.settings.env );
}

module.exports.start = start;