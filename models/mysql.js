var mysql = require( 'mysql' );
var dbInfo = require( '../confs/dbinfo' ).MySQL;

var pool  = mysql.createPool( {
	host: dbInfo.host,
	user: dbInfo.user,
	password : dbInfo.password,
	database : dbInfo.database
} );

// If the Node process ends, close the Mongoose connection 
process.on( 'SIGINT', function() {  
	pool.end( function ( err ) {
		console.log( 'MySQL connection disconnected through app termination' ); 
		process.exit( 0 ) ; 
	} ); 
} );

module.exports = pool;