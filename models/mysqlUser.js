var mysql = require( './mysql' );
var errors = require( './../controllers/errors' );

/**
 * Based on given User ID, selects and return friend list of thart User or return error.
 * 
 * @param {number} id User id (must be non-neagtive integer)
 * @param {function} callback Callback function
 *
 * @throws 
 * @returns {Callback} Calls callback with parameters containing error information and if no error occured, array of objects with user ids
 */
var get_user_friends = function ( id, callback ) {
	if ( validate_user_id( id ) === false )
		// If given ID is not a proper user ID, return an error message
		return callback( errors.new_std_error( 400, "Invalid ID given" ), false );

	id = parseInt( id );
	
	mysql.getConnection( function( err, connection ) {
		if ( err )
			return callback( err, false );

		connection.query(
			'SELECT ?? FROM ?? WHERE ?? = ?',
			[ 'id2', 'user_friends', 'id1', id ],
			function( err, rows ) {
				connection.release();
				return callback( err, rows );
			}
		);
	});
}

/**
 * Based on given User IDs, create connection between two users or return error.
 * 
 * @param  {number} id1 User id1 (non-neagtive integer) different than id2
 * @param  {number} id2 User id2 (non-neagtive integer) different than id1
 * @param  {Function} callback Callback function
 * 
 * @returns {Callback} Calls callback with parameters containing error information and if no error occured, boolean true
 */
var create_users_friendship = function ( id1, id2, callback ) {
	if ( validate_user_id( id1 ) === false || validate_user_id( id2 ) === false || id1 === id2 )
		// If any of given IDs is not a proper user ID or given IDs are the same, return an error message
		return callback( errors.new_std_error( 400, 'Invalid ID given' ) );

	id1 = parseInt( id1 );
	id2 = parseInt( id2 );

	mysql.getConnection( function( err, connection ) {
		if ( err )
			return callback( err, false );

		// Begin transaction - adding friends means adding id1-id2 and id2-id1 rows in DB
		connection.beginTransaction( function ( err ) {
			if ( err )
				return tr;

			connection.query(
				'INSERT IGNORE INTO ?? SET ?? = ?, ?? = ?',
				[ 'user_friends', 'id1', id1, 'id2', id2 ],
				function( err, rows ) {
					if ( err )
						connection.rollback( function() {
							throw err;
						} );
				}
			);

			connection.query(
				'INSERT IGNORE INTO ?? SET ?? = ?, ?? = ?',
				[ 'user_friends', 'id1', id2, 'id2', id1 ],
				function( err, rows ) {
					if ( err )
						connection.rollback( function() {
							throw err;
						} );
				}
			);

			connection.commit( function( err ) {
				if ( err ) 
					connection.rollback( function() {
						throw err;
					} );
				
				connection.release();
				return callback( err, true );
			} );

		} );
		
	});
}

/**
 * Based on given User IDs, destroy connection between two users or return error.
 * 
 * @param  {number} id1 User id1 (non-neagtive integer) different than id2
 * @param  {number} id2 User id2 (non-neagtive integer) different than id1
 * @param  {Function} callback Callback function
 * 
 * @returns {Callback} Calls callback with parameters containing error information and if no error occured, boolean true
 */
var destroy_user_friendship = function ( id1, id2, callback ) {
	if ( validate_user_id( id1 ) === false || validate_user_id( id2 ) === false || id1 === id2 )
		// If any of given IDs is not a proper user ID or given IDs are the same, return an error message
		return callback( errors.new_std_error( 400, 'Invalid ID given' ) );

	id1 = parseInt( id1 );
	id2 = parseInt( id2 );

	mysql.getConnection( function( err, connection ) {
		if ( err )
			return callback( err, false );

		// Begin transaction - removing friend means removing id1-id2 and id2-id1 rows in DB
		connection.beginTransaction( function ( err ) {
			if ( err )
				return tr;

			connection.query(
				'DELETE FROM ?? WHERE ?? = ? AND ?? = ?',
				[ 'user_friends', 'id1', id1, 'id2', id2 ],
				function( err, rows ) {
					if ( err )
						connection.rollback( function() {
							throw err;
						} );
				}
			);

			connection.query(
				'DELETE FROM ?? WHERE ?? = ? AND ?? = ?',
				[ 'user_friends', 'id1', id2, 'id2', id1 ],
				function( err, rows ) {
					if ( err )
						connection.rollback( function() {
							throw err;
						} );
				}
			);

			connection.commit( function( err ) {
				if ( err ) 
					connection.rollback( function() {
						throw err;
					} );
				
				connection.release();
				return callback( err, true );
			} );

		} );
		
	});
}

/**
 * Tests if given id is proper User ID (non-negative integer).
 * 
 * @param  {number} id User id (non-neagtive integer)
 * 
 * @returns {boolean}
 */
var validate_user_id = function ( id ) {
	var test = false;

	// Check if id is a number (integer) and is higher than 0
	if ( !isNaN( id ) && id % 1 === 0) {
		id = parseInt( id ); // Cast given number to integer

		if ( id >= 0 )
			// If given number is non-negative return true
			test = true;
	}

	return test;
};

module.exports = {
	get_user_friends: get_user_friends,
	create_users_friendship: create_users_friendship,
	destroy_user_friendship: destroy_user_friendship
};