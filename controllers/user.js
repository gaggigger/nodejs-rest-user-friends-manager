var db = require( './../models/mysqlUser' );
var errors = require( './errors' );

var get_user_friends_list = function ( req, res, next ) {
	var id = req.params.id1; // Given User ID

	// Geting user friends list
	db.get_user_friends( id, function ( err, data ) {
		if ( err )
			// If during getting friends list error occured, return an error message
			return next( errors.new_std_error( err.status, 'Selecting friends error: ' + err.message ) );

		// Send response with an array containing user friends IDs.
		// If user have no friends empty array is sended
		var showList = {
			"friendsList": ( data ) ? data.map( function ( elem ) { return elem.id2 } ) : []
		};

		res.status( 200 ).end( JSON.stringify( showList ) );
	} );
};

var users_connect = function ( req, res, next ) {
	var id1 = req.params.id1; // Given first User ID
	var id2 = req.params.id2; // Given second User ID

	// Create friendship
	db.create_users_friendship( id1, id2, function ( err ) {
		if ( err )
			// If during creating friends error occured, return an error message
			return next( errors.new_std_error( err.status, 'Creating friends error: ' + err.message ) );

		// Send positive response
		res.status( 200 ).send( { message: "Users became friends" } );
	} );
};

var users_disconnect = function ( req, res, next ) {
	var id1 = req.params.id1; // Given first User ID
	var id2 = req.params.id2; // Given second User ID

	// Destroy friendship
	db.destroy_user_friendship( id1, id2, function ( err ) {
		if ( err )
			// If during removing friends error occured, create an error message
			return next( errors.new_std_error( err.status, 'Removing friends error: ' + err.message ) );

		// Send positive response
		res.status( 200 ).send( { message: "Users are not friends anymore" } );
	} );

};

module.exports = {
	get_user_friends_list: get_user_friends_list,
	users_connect: users_connect,
	users_disconnect: users_disconnect
};