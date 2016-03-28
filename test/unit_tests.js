var chai = require( 'chai' );

var expect = chai.expect;

var sinon = require( 'sinon' );

var userController = require( './../controllers/user' );
var errorsController = require( './../controllers/errors' );

describe( 'userController', function () {
	describe( 'validate_user_id', function () {
		it( 'Return false if no item passed in', function () {
			expect( userController.validate_user_id() ).to.equal( false );
		} );

		it( 'Return false if passed ID is bool', function () {
			expect( userController.validate_user_id( true ) ).to.equal( false );
		} );

		it( 'Return false if passed ID is string', function () {
			expect( userController.validate_user_id( "33fdjhh333" ) ).to.equal( false );
		} );

		it( 'Return false if passed ID is lower than 0', function () {
			expect( userController.validate_user_id( -1 ) ).to.equal( false );
		} );

		it( 'Return true if passed ID is non-negative integer', function () {
			expect( userController.validate_user_id( 1 ) ).to.equal( true );
		} );
	} );
} );

describe( 'errorsController', function () {
	describe( 'new_std_error', function () {
		it( 'Return Error { status: 500, message: "Something went wrong..." } when no status and no mesage passed', function () {
			var value = errorsController.new_std_error();
			expect( value ).to.be.an( 'error' );
			expect( value.status ).to.equal( 500 );
			expect( value.message ).to.equal( 'Something went wrong...' );
		} );

		it( 'Return Error with given status and message', function () {
			var status = 400;
			var message = 'test message';

			var value = errorsController.new_std_error( status, message );
			expect( value ).to.be.an( 'error' );
			expect( value.status ).to.equal( status );
			expect( value.message ).to.equal( message );
		} );
	} );
} );