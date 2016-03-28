var new_std_error = function ( status, message ) {
	var err = new Error ();
	err.status = status || 500; // HTTP status (500 if no status given)
	err.message = message || 'Something went wrong...'; // Mesage to send

	return err;
}

module.exports = {
	new_std_error: new_std_error
}