
/* Graphs */

var graphs = require( './node_modules/graphs/lib/graphs.js' );
graphs.debug();
graphs.connect( 'http://localhost:7474' );

var v1 = Math.floor( Math.random()* 10 );
var v2 = Math.floor( Math.random()* 10 );
var state = {};
state.relationship_seed = v1 + '-' + v2;

var on_error = function( err_req, err_res ) {
	console.log( 'ERROR', err_req, err_res );
};

var create = function( state, callback ) {

	var finished = function() {
		console.log( 'Create > Finished' );
	};
	console.log( 'Create > Started' );
	
	/* Create Node 1 */
	graphs.create( { datatype: 'node', data: { seed: v1 }, on_success: function( req1, res1 ) {
		
		console.log( 'Create > Create Node 1 > Complete' );

		state.node_1 = res1.id;

		/* Index Property On Node 1 */
		graphs.create( { datatype: 'index', id: res1.id, index_type: 'node', index: 'NODE_IDX', key: 'seed', value: v1, on_complete: function( req2, res2 ) {

			state.node_1_seed = v1;

			console.log( 'Create > Index Property On Node 1 > Complete' );

			// Create done
			if ( 'function' === typeof callback ) {
				console.log( 'Create > Success > ' + JSON.stringify( state ) );
				finished();
				callback( state );
			}

		}, on_error: function() { 
			console.log( 'Create > Index Property On Node 1 > Failed' );
			finished();
		} } );

	}, on_error: function() { 
		console.log( 'Create > Create Node 1 > Failed' );
		finished();
	} } );

};


var update = function( state, callback ) {

	var update_on_error = function( err_req, err_res ) {
		console.log( 'Update error', err_req, err_res );
	};
	var v3 = Math.floor( Math.random() * 100 );
	var v4 = Math.floor( Math.random() * 100 );
	var v5 = Math.floor( Math.random() * 100 );
	var v6 = Math.floor( Math.random() * 100 );
	var v7 = v3 + '-' + v5;
	var v8 = v4 + '-' + v6;

	var finished = function() {
		console.log( "Update > Finished" );
	};
	
	console.log( "Update > Started" );

	/* Update Node 1 By Index */
	graphs.update( { datatype: 'index', index_type: 'node', data: { seed: v3 }, reindex: true, index: 'NODE_IDX', key: 'seed', value: state.node_1_seed, on_success: function( req2, res2 ) {

		console.log( 'Update > Update Node 1 By Index > Success', req2, res2 );
	
	}, on_complete: function( req2, res2 ) { 

		console.log( 'Update > Update Node 1 By Index > Complete', req2, res2 );
		state.node_1_seed = v3;

		/* Update Node 1 By ID */
/*		graphs.update( { datatype: 'node', id: state.node_1, data: { seed: v4 }, on_success: function( req1, res1 ) {

			console.log( 'Update > Update Node 1 By ID > Success', req1, res1 );

		}, on_complete: function( req1, res1 ) { 

			state.node_1_seed = v4;
*/
			// Update done
			if ( 'function' === typeof callback ) {
				console.log( 'Update > ' + JSON.stringify( state )  );
				finished();
				callback( state );
			}
/*
		}, on_error: function( res ) {
            console.log( 'Update > Update Node 1 By ID > Failed' );
            finished();
        } } );
*/
	}, on_error: function( res ) {
         console.log( 'Update > Update Node 1 By Index  > Failed' );
         finished();
    } } );

};

var read = function( state, callback, on_error ) {

	var on_error = function( err_req, err_res ) {
		console.log( 'Read error', err_req, err_res );
	};

	var finished = function() {
		console.log( 'Read > Finished' );
	};

	console.log( 'Read > Started' );

	/* Get Node 1 By ID */
/*	graphs.read( { datatype: 'node', id: state.node_1, on_success: function( req1, res1 ) {

		if ( state.node_1_seed !== res1.data.seed ) {
			console.log(  'Read > Get Node 1 By ID > Node 1 data mismatch', state.node_1_seed, res1.data.seed );
			var err = new Error( 'Read > Get Node 1 By ID > Node 1 data mismatch', state.node_1_seed, res1.data.seed );
			if ( 'function' === typeof on_error ) {
				on_error( err );
			} else {
				throw err;
			}
		} else {
			console.log( 'Read > Get Node 1 By ID > Complete' );
		}
*/
		/* Get Node 1 By Index */
		graphs.read( { datatype: 'index', index_type: 'node', index: 'NODE_IDX', key: 'seed', value: state.node_1_seed, on_success: function( req2, res2 ) {
		
			if ( state.node_1_seed !== res2.data.seed ) {
				console.log( 'Read > Get Node 1 By Index > Failed' );
				var err = new Error( 'Node 1 index data mismatch', state.node_1_seed, res2.data.seed );
				if ( 'function' === typeof on_error ) {
					on_error( err );
				} else {
					throw err;
				}
			} else {
				console.log( 'Read > Get Node 1 By Index > Complete' );
			}

		}, on_complete: function( req2, res2 ) { 

			// Read done
			if ( 'function' === typeof callback ) {
				console.log( 'Read > Success > ' + JSON.stringify( state )  );
				finished();
				callback( state );
			}


		}, on_error: function( res ) {
			console.log( 'Read > Get Node 1 By Index > Failed' );
			finished();
		} } );
/*
	}, on_error: function( res ) {
		console.log( 'Read > Get Node 1 By ID > Failed' );
		finished();
	} } );
*/
};

var destroy = function( state, callback ) {

	var destroy_on_error = function( err_req, err_res ) {
		console.log( 'Destroy test error', err_req, err_res );
	};

	var finished = function() {
		console.log( 'Destroy > Finished' );
	};

	console.log( 'Destroy > Started' );

	/* Remove Relationship By ID */
	graphs.destroy( { datatype: 'relationship', id: state.relationship, on_success: function( req1, res1 ) {
	
		delete state.relationship;	
		console.log( 'Destroy > Remove Relationship By ID > Complete' );

		/* Remove Node 1 By ID */
		graphs.destroy( { datatype: 'node', id: state.node_1, on_success: function( req1, res1 ) {

			delete state.node_1;				
			console.log( 'Destroy > Remove Node 1 By ID > Complete' );

			// Destroy done
			if ( 'function' === typeof callback ) {
				console.log( 'Destroy > Success > ' + JSON.stringify( state ) );
				finished();
				callback( state );
			}

		}, on_error: function( err_req, err_res ) {	
			console.log( 'Destroy > Remove Node 1 By ID > Failed' );
			finished();
		} } );

	}, on_error: function( err_req, err_res ) {	
		console.log( 'Destroy > Remove Relationship By ID > Failed' );
		finished();
	} } );
};

/* Test */

var test = function( state ) {
	create( state, function( state ) {
		//read( state, function( state ) {
			update( state, function( state ) {
				//read( state, function( state ) {
					//destroy( state, function( state ) {
						console.log( "FINISHED", state );
					//} );
				//} );
			} );
		//} );
	} );
}( state );

