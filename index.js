var cluster = require( 'cluster' );
var server = require('./server');

if ( cluster.isMaster ) {
	// Count avaliable CPU
	var cpus = require( 'os' ).cpus().length;

	// Start one worker for each CPU
	for ( var i = 0; i < cpus; i++ ) {
		cluster.fork();
	}
}
else {

	server.start();
}

cluster.on ( 'exit', function ( worker, signal, code ) {
	console.log( 'App worker %d died with code/signal %s. Restarting worker...', worker.id, signal || code );
	cluster.fork();
} );