
/* Graphs */

var graphs = require( './node_modules/graphs/lib/graphs.js' );
//graphs.debug();
graphs.connect( 'http://localhost:7474' );

var query_1 = "START n=node(1) return n";
var index_query_1 = "seed:*";

var state = [];

var on_error = function( err_req, err_res ) {
	console.log( 'ERROR', err_req, err_res );
};

var query = function( state, callback ) {

	var finished = function() {
		console.log( 'Query > Finished' );
	};

	console.log( 'Query > Started' );
	
	/* Query 1 */
	graphs.query( { query: query_1, on_success: function( req1, res1 ) {
		
		console.log( 'Query > Query 1 > Success', req1, res1 );
		state.push( res1.n );

	}, on_complete: function( req1, res1 ) {

		console.log( 'Query > Query 1 > Complete', req1, res1 );

		/* Index Query 1 */
		graphs.query( { query: index_query_1, index: 'NODE_IDX', index_type: 'node', on_success: function( req2, res2 ) {
		
			console.log( 'Query > Index Query 1 > Success', req2, res2 );
			state.push( res2 );
	
		}, on_complete: function( req2, res2 ) {
			
			console.log( 'Query > Index Query 1 > Complete', req2, res2 );
			
			// Index Query done
			if ( 'function' === typeof callback ) {
				console.log( 'Query > Success > ' + JSON.stringify( state ) );
				finished();
				callback( state );
			}

		}, on_error: function() { 
			console.log( 'Query > Index Query 1 > Failed' );
			finished();
		} } );

	}, on_error: function() { 
		console.log( 'Query > Query 1 > Failed' );
		finished();
	} } );

};

/* Test */

var test = function( state ) {
	query( state, function( state ) {
		console.log( "FINISHED", state );
	} );
}( state );

