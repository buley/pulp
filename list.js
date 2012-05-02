
/* Graphs */

var graphs = require( './node_modules/graphs/lib/graphs.js' );
graphs.debug();
graphs.connect( 'http://localhost:7474' );

var state = [];

var on_error = function( err_req, err_res ) {
	console.log( 'ERROR', err_req, err_res );
};

var list = function( state, callback ) {

	var finished = function() {
		console.log( 'List > Finished' );
	};

	console.log( 'List > Started' );
	
	/* List 1 */
	graphs.list( { type: 'node', id: 1, direction: 'in', list_type: 'relationships', on_success: function( req1, res1 ) {
		
		console.log( 'List > List 1 > Success', req1, res1 );
		state.push( res1 );

	}, on_complete: function( req1, res1 ) {

		console.log( 'List > List 1 > Complete', req1, res1 );

		/* Index List 1 */
		graphs.list( { type: 'node', id: 1, list_type: 'relationships', types: [ 'RELATED_TO', 'HELLO_WORLD' ], on_success: function( req2, res2 ) {
		
			console.log( 'List > Index List 1 > Success', req2, res2 );
			state.push( res2 );
	
		}, on_complete: function( req2, res2 ) {
			
			console.log( 'List > Index List 1 > Complete', req2, res2 );

				/* Relationship List 2 */
				graphs.list( { type: 'relationship', on_success: function( req3, res3 ) {
				
					console.log( 'List > Relationship List 2 > Success', req3, res3 );
					state.push( res3 );
			
				}, on_complete: function( req3, res ) {
								
					// Index List done
					if ( 'function' === typeof callback ) {
						console.log( 'List > Success > ' + JSON.stringify( state ) );
						finished();
						callback( state );
					}

			}, on_error: function() { 
				console.log( 'List > Index List 1 > Failed' );
				finished();
			} } );


		}, on_error: function() { 
			console.log( 'List > Index List 1 > Failed' );
			finished();
		} } );

	}, on_error: function() { 
		console.log( 'List > List 1 > Failed' );
		finished();
	} } );

};

/* Test */

var test = function( state ) {
	list( state, function( state ) {
		console.log( "FINISHED", state );
	} );
}( state );

