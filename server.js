
/* Graphs */

var graphs = require( './node_modules/graphs/lib/graphs.js' );
console.log('graphs',typeof graphs.connect);
graphs.debug();
graphs.connect( 'http://localhost:7474' );

var v1 = Math.floor( Math.random()* 10 );
var v2 = Math.floor( Math.random()* 10 );

var on_error = function( req, res ) {
	console.log( 'ERROR', req, res );
};

var create = function( callback ) {

	/* Create Node 1 */
	graphs.create( { datatype: 'node', data: { seed: v1 }, on_success: function( req1, res1 ) {

		/* Index Property On Node 1 */
		graphs.create( { datatype: 'index', id: res1.id, index_type: 'node', index: 'NODE_IDX', data: { seed: v1 + '-' + v2 }, on_success: function( req2, res2 ) {

			/* Create Node 2 */
			graphs.create( { datatype: 'node', data: { seed: v2 }, on_success: function( req3, res3 ) {

				/* Index Property On Node 2 */
				graphs.create( { datatype: 'index', id: res3.id, index_type: 'node', index: 'NODE_IDX', data: { seed: v1 + '-' + v2 }, on_success: function( req4, res4 ) {
				
					/* Create Relationship Between Node 1 and Node 2 */
					graphs.create( { datatype: 'relationship', to: res3.id, from: res1.id, data: { seed: v1 + '-' + v2 }, name: 'RELATIONSHIP_IDX', on_success: function( req5, res5 ) {

						/* Index Property On Relationship */
						graphs.create( { datatype: 'index', id: res5.id, index_type: 'relationship', index: 'RELATIONSHIP_IDX', data: { seed: v1 + '-' + v2 }, on_success: function( req4, res4 ) {

							// Create done
							if ( 'function' === typeof callback ) {
								callback();
							}

						} , on_error: on_error } );

					} , on_error: on_error } );

				} , on_error: on_error } );

			} , on_error: on_error } );

		}, on_error: on_error } );

	}, on_error: on_error } );

};


var update = function( callback ) {
	// Update done
	if ( 'function' === typeof callback ) {
		callback();
	}
};

var read = function( callback ) {
	// Read done
	if ( 'function' === typeof callback ) {
		callback();
	}
};

var destroy = function( callback ) {
	// Destroy done
	if ( 'function' === typeof callback ) {
		callback();
	}
};

/* Test */

var test = function() {
	create( function() {
		update( function() {
			read( function() {
				destroy( function() {
					console.log( "TESTS PASSED" );
				} );
			} );
		} );
	} );
}();
