
/* Graphs */

var graphs = require( './node_modules/graphs/lib/graphs.js' );
//graphs.debug();
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
		
		console.log( 'Create > Create Node 1 > Passed' );

		state.node_1 = res1.id;
		state.node_1_seed = v1;

		/* Index Property On Node 1 */
		graphs.create( { datatype: 'index', id: res1.id, index_type: 'node', index: 'NODE_IDX', key: 'seed', value: v1, on_complete: function( req2, res2 ) {

			console.log( 'Create > Index Property On Node 1 > Passed' );

			/* Create Node 2 */
			graphs.create( { datatype: 'node', data: { seed: v2 }, on_success: function( req3, res3 ) {

				console.log( 'Create > Create Node 2 > Passed' );
				state.node_2 = res3.id;
				state.node_2_seed = v2;
				
				/* Index Property On Node 2 */
				graphs.create( { datatype: 'index', id: res3.id, index_type: 'node', index: 'NODE_IDX', key: 'seed', value: v2, on_complete: function( req4, res4 ) {
				
					console.log( 'Create > Index Property On Node 2 > Passed' );

					/* Create Relationship Between Node 1 and Node 2 */
					graphs.create( { datatype: 'relationship', to: res3.id, from: res1.id, data: { seed: state.relationship_seed }, name: 'HELLO_WORLD', on_success: function( req5, res5 ) {

						state.relationship = res5.id;	
						console.log( 'Create > Create Relationship Between Node 1 and Node 2 > Passed' );
;
						/* Index Property On Relationship */
						graphs.create( {
							datatype: 'index'
							, id: res5.id
							, index_type: 'relationship'
							, index: 'RELATIONSHIP_IDX'
							, key: 'seed'
							, value: state.relationship_seed
							, on_success: function( res6, res5 ) { 
								console.log( 'Create > Index Property On Relationship > Passed' );
							}
							, on_complete: function( req6, res6 ) {
								// Create done
								if ( 'function' === typeof callback ) {
									console.log( 'Create > Success > ' + JSON.stringify( state ) );
									finished();
									callback( state );
								}
							}
							, on_error: function() {
								console.log( 'Create > Index Property On Relationship > Failed' );
								finished();
							} 
						} );

					}, on_error: function() { 
						console.log( 'Create > Create Relationship Between Node 1 and Node 2 > Failed' );
						finished();
					} } );

				} , on_error: function() { 
					console.log( 'Create > Index Property On Node 2 > Failed' );
					finished();
				} } );

			} , on_error: function() { 
				console.log( 'Create > Create Node 2 > Failed' );
				finished();
			} } );

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
	graphs.update( { datatype: 'node', index_type: 'node', data: { seed: v3 }, reindex: true, index: 'NODE_IDX', key: 'seed', value: state.node_1_seed, on_success: function( req2, res2 ) {

		console.log( 'Update > Update Node 1 By Index > Passed' );
		state.node_1_seed = v3;
	
	//}, on_complete: function( req2, res2 ) { 

		/* Update Node 1 By ID */
		graphs.update( { datatype: 'node', id: state.node_1, data: { seed: v4 }, on_success: function( req1, res1 ) {

			console.log( 'Update > Update Node 1 By ID > Passed' );
			state.node_1_seed = v4;
	
		}, on_complete: function( req1, res1 ) { 
			//TODO: Updating index but doing so before node itself is updated
			/* Update Node 2 By Index */
			graphs.update( { datatype: 'index', index_type: 'node', data: { seed: v5 }, reindex: true, index: 'NODE_IDX', key: 'seed', value: state.node_2_seed, on_success: function( req4, res4 ) {

				console.log( 'Update > Update Node 2 By Index > Passed' );
				state.node_2_seed = v5;
				
			//}, on_complete: function( req4, res4 ) { 

				/* Update Node 2 By ID */

				graphs.update( { datatype: 'node', id: state.node_2, data: { seed: v6 }, on_success: function( req3, res3 ) {

					console.log( 'Update > Update Node 2 By ID > Passed' );
					state.node_2_seed = v6;

				//}, on_complete: function( req3, res3 ) {

					/* Update Relationship By Index */
					graphs.update( { datatype: 'index', index_type: 'relationship', data: { seed: v7 }, reindex: true, index: 'RELATIONSHIP_IDX', key: 'seed', value: state.relationship_seed, on_success: function( req5, res5 ) {

						console.log( 'Update > Update Relationship By Index > Success' );

					}, on_complete: function( req5, res5 ) {

						console.log( 'Update > Update Relationship By Index > Passed' );
						state.relationship_seed = v7;

						/* Update Relationship By ID */
						graphs.update( { datatype: 'relationship', id: state.relationship, data: { seed: v8 }, on_success: function( req6, res6 ) {
			
							console.log( 'Update > Update Relationship By ID > Passed' );
							state.relationship_seed = v8;

						}, on_complete: function( req6, res6 ) {

							// Update done
							if ( 'function' === typeof callback ) {
								console.log( 'Update > ' + JSON.stringify( state )  );
								finished();
								callback( state );
							}

						}, on_error: function( res ) {
               				console.log( 'Update > Update Relationship By ID  > Failed' );
  		          			finished();
        		        } } );
	
					}, on_error: function( res ) {
              		  console.log( 'Update > Update Relationship By Index  > Failed' );
       	              finished();
          			} } );

				}, on_error: function( res ) {
                    console.log( 'Update > Update Node 2 By ID > Failed' );
                    finished();
                } } );

			}, on_error: function( res ) {
                console.log( 'Update > Update Node 2 By Index > Failed' );
                finished();
            } } );

		}, on_error: function( res ) {
            console.log( 'Update > Update Node 1 By ID > Failed' );
            finished();
        } } );

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
	graphs.read( { datatype: 'node', id: state.node_1, on_success: function( req1, res1 ) {

		if ( state.node_1_seed !== res1.data.seed ) {
			console.log(  'Read > Get Node 1 By ID > Node 1 data mismatch', state.node_1_seed, res1.data.seed );
			var err = new Error( 'Read > Get Node 1 By ID > Node 1 data mismatch', state.node_1_seed, res1.data.seed );
			if ( 'function' === typeof on_error ) {
				on_error( err );
			} else {
				throw err;
			}
		} else {
			console.log( 'Read > Get Node 1 By ID > Passed' );
		}

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
				console.log( 'Read > Get Node 1 By Index > Passed' );
			}

		}, on_complete: function( req2, res2 ) { 
			
			/* Get Node 2 By ID */
			graphs.read( { datatype: 'node', id: state.node_2, on_success: function( req3, res3 ) {

				if ( state.node_2_seed !== res3.data.seed ) {
					console.log( 'Read > Get Node 2 By ID > Failed' );
					var err = new Error( 'Node 2 data mismatch', state.node_2_seed, res3.data.seed );
					if ( 'function' === typeof on_error ) {
						on_error( err );
					} else {
						throw err;
					}
				} else {
					console.log( 'Read > Get Node 2 By ID > Passed' );
				}

				/* Get Node 2 By Index */
				graphs.read( { datatype: 'index', index_type: 'node', index: 'NODE_IDX', key: 'seed', value: state.node_2_seed, on_success: function( req4, res4 ) {

					if ( state.node_2_seed !== res4.data.seed ) {
						console.log( 'Read > Get Node 2 By Index > Failed' );
						var err = new Error( 'Node 2 index data mismatch', state.node_2_seed, res4.data.seed );
						if ( 'function' === typeof on_error ) {
							on_error( err );
						} else {
							throw err;
						}
					} else {
						console.log( 'Read > Get Node 2 By Index > Passed' );
					}

				}, on_complete: function( req4, res4 ) { 


					/* Get Relationship By ID */
					graphs.read( { datatype: 'relationship', id: state.relationship, on_success: function( req5, res5 ) {

						if ( state.relationship_seed !== res5.data.seed ) {
							console.log( 'Read > Get Relationship By ID > Failed' );
							var err = new Error( 'Relationship data mismatch', state.relationship_seed, res5.data.seed );
							if ( 'function' === typeof on_error ) {
								on_error( err );
							} else {
								throw err;
							}
						} else {
							console.log( 'Read > Get Relationship By ID > Passed' );
						}

						/* Get Relationship By Index */
						graphs.read( { datatype: 'index', index_type: 'relationship', index: 'RELATIONSHIP_IDX', key: 'seed', value: state.relationship_seed, on_success: function( req6, res6 ) {

							if ( state.relationship_seed !== res6.data.seed ) {
								console.log( 'Read > Get Relationship By Index > Failed' );
								var err = new Error( 'Relationship index data mismatch', state.relationship_seed, res6.data.seed );
								if ( 'function' === typeof on_error ) {
									on_error( err );
								} else {
									throw err;
								}
							} else {
								console.log( 'Read > Get Relationship By Index > Passed' );
							}

						}, on_complete: function( req6, res6 ) {

							// Read done
							if ( 'function' === typeof callback ) {
								console.log( 'Read > Success > ' + JSON.stringify( state )  );
								finished();
								callback( state );
							}

						}, on_error: function( res ) {
							console.log( 'Read > Get Relationship By Index > Failed' );
							finished();
						} } );

					}, on_error: function( res ) {
						console.log( 'Read > Get Relationship By ID > Failed' );
						finished();
					} } );

				}, on_error: function( res ) {
					console.log( 'Read > Get Node 2 By Index > Failed' );
					finished();
				} } );

			}, on_error: function( res ) {
				console.log( 'Read > Get Node 2 By ID > Failed' );
				finished();
			} } );

		}, on_error: function( res ) {
			console.log( 'Read > Get Node 1 By Index > Failed' );
			finished();
		} } );

	}, on_error: function( res ) {
		console.log( 'Read > Get Node 1 By ID > Failed' );
		finished();
	} } );

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
		console.log( 'Destroy > Remove Relationship By ID > Passed' );

		/* Remove Node 1 By ID */
		graphs.destroy( { datatype: 'node', id: state.node_1, on_success: function( req1, res1 ) {

			delete state.node_1;				
			console.log( 'Destroy > Remove Node 1 By ID > Passed' );

			/* Remove Node 2 By ID */
			graphs.destroy( { datatype: 'node', id: state.node_2, on_success: function( req1, res1 ) {
			
				delete state.node_2;
				console.log( 'Destroy > Remove Node 2 By ID > Passed' );	

				// Destroy done
				if ( 'function' === typeof callback ) {
					console.log( 'Destroy > Success > ' + JSON.stringify( state ) );
					finished();
					callback( state );
				}

			}, on_error: function( err_req, err_res ) {	
				console.log( 'Destroy > Remove Node 2 By ID > Failed' );
				finished();
			} } );

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
		read( state, function( state ) {
			update( state, function( state ) {
				read( state, function( state ) {
					destroy( state, function( state ) {
						console.log( "FINISHED", state );
					} );
				} );
			} );
		} );
	} );
}( state );

