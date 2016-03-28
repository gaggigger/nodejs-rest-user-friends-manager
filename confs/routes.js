function setRoutes ( app, controllers ) {
	/**
	 * @apiDefine UserIdError
	 * 
	 * @apiError message Invalid <code>ID</code> given
	 *
	 * @apiErrorExample Error response (example):
	 * HTTP/1.1 400 Bad Request
	 * {"message":"Invalid ID given"}
	 */

	/**
	 * @api {get} /user_friends/:id1 Get User friends list
	 * @apiName GetUserFriendsList
	 * @apiGroup User
	 *
	 * @apiParam {Number} id1 Unique ID of User (non-negative integer)
	 *
	 * @apiExample {curl} Example usage:
	 * curl -i -X GET http://localhost:8081/user_friends/1
	 *
	 * @apiSuccess {Number[]} friendsList List of user friends IDs (may return empty list)
	 *
	 * @apiSuccessExample {json} Success response (empty list example):
	 * HTTP/1.1 200 OK
	 * {"friendsList":[]}
	 *
	 * @apiSuccessExample {json} Success response (filled list example):
	 * HTTP/1.1 200 OK
	 * {"friendsList":[4,5,554543]}
	 *
	 * @apiUse UserIdError
	 */
	app.get( '/user_friends/:id1', controllers.user.get_user_friends_list);

	/**
	 * @api {put} /user_friends/:id1,:id2 Make new friends connection
	 * @apiName MakeNewFriendsConnection
	 * @apiGroup User
	 *
	 * @apiParam {Number} id1 Unique ID of User (non-negative integer) different than id2
	 * @apiParam {Number} id2 Unique ID of User (non-negative integer) different than id1
	 *
	 * @apiExample Example usage:
	 * curl -i -X GET http://localhost:8081/user_friends/1,2
	 *
	 * @apiSuccess {String} message Users became friends
	 *
	 * @apiSuccessExample {json} Success response (example):
	 * HTTP/1.1 200 OK
	 * {"message":"Users became friends"}
	 *
	 * @apiError message Invalid <code>ID</code> given
	 *
	 * @apiUse UserIdError
	 */
	app.put( '/user_friends/:id1,:id2', controllers.user.users_connect);

	/**
	 * @api {delete} /user_friends/:id1,:id2 Destroy friends connection
	 * @apiName DestroyFriendsConnection
	 * @apiGroup User
	 *
	 * @apiParam {Number} id1 Unique ID of User (non-negative integer) different than id2
	 * @apiParam {Number} id2 Unique ID of User (non-negative integer) different than id1
	 *
	 * @apiExample Example usage:
	 * curl -i -X DELETE http://localhost:8081/user_friends/1,2
	 *
	 * @apiSuccess {String} message Users are not friends anymore
	 *
	 * @apiSuccessExample {json} Success response (example):
	 * HTTP/1.1 200 OK
	 * {"message":"Users are not friends anymore"}
	 *
	 * @apiError message Invalid <code>ID</code> given
	 *
	 * @apiUse UserIdError
	 */
	app.delete( '/user_friends/:id1,:id2', controllers.user.users_disconnect);
	
	/**
	 * @api {all} * Other requests
	 * @apiName OtherRequests
	 * @apiGroup General
	 *
	 * @apiDescription All conections that are not mentioned in this document will get error response
	 *
	 * @apiExample Example usage:
	 * curl -i -X GET http://localhost:8081/other_request
	 *
	 * @apiError {String} message Nothing here
	 *
	 * @apiErrorExample {json} Error response (example):
	 * HTTP/1.1 404 OK
	 * {"message":"Nothing here"}
	 */
	app.all( '*', function ( req, res, next ) {
		var error = new Error ();
		error.status = 404;
		error.message = 'Nothing here';
		next(error);
	} );

	// Errors handling
	app.use(function(err, req, res, next) {
		res.status(err.status || 500)
		res.send({
			message: err.message
		});
	});
}

module.exports.setup = setRoutes;