/* pulp */

var neo4j = require( 'neo4j' );

var Pulp = ( function() {

	/* Neo4J Database */

	var Private = {};

	Private.db = new neo4j.GraphDatabase( 'http://localhost:7474' );

	/* Database API */

	Private.database = {};

	Private.database.node = {};

	Private.database.node.create = function( req ) {
		console.log( 'Private.database.node.create', req );

		var data = req.data;
		var generic_callback = function( err, result ) {
			console.log( 'Private.database.node.create > generic_callback', err, result );
			if( 'undefined' !== typeof err && null !== err ) {
				own_on_error( err );
			} else {
				own_on_success( result );
			}
		};
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};

		var node = Private.db.createNode( data );
		node.save( generic_callback );

	};

	Private.database.node.destroy = function( req ) {
		console.log( 'Private.database.node.destroy', req );
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_complete = function( res ) {
			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};

		var node = Private.db.createNode( data );
		node.save( generic_callback );

	};

	Private.database.node.update = function( req ) {
		console.log( 'Private.database.node.update', req );
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_complete = function( res ) {
			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};
		on_success( {} );
	};

	Private.database.node.read = function( req ) {
		console.log( 'Private.database.node.read', req );

		var data = req.data;
		var generic_callback = function( err, result ) {
			if( 'undefined' !== typeof err && null !== err ) {
				own_on_error( err );
			} else {
				own_on_success( result );
			}
		};
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};

		Private.db.getNodeById( id, generic_callback );

	};


	Private.database.relationship = {};

	Private.database.relationship.create = function( req ) {

		console.log( 'Private.database.relationship.create', req );

		var from = req.request.from;
		var to = req.request.to;
		var name = req.request.name;
		var data = req.request.data;

		var generic_callback = function( err, result ) {
			if( 'undefined' !== typeof err && null !== err ) {
				own_on_error( err );
			} else {
				own_on_success( result );
			}
		};
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};
		Private.db.getNodeById( from, function( error, from_node ) {
			if ( null !== error ) {
				own_on_error( req, from_node );
				return;
			}
			Private.db.getNodeById( to, function( error, to_node ) {
				if ( null !== error ) {
					own_on_error( req, to_node );
					return;
				}
				from_node.createRelationshipTo( to_node, name, data, generic_callback );
			} );
		} );

	};

	Private.database.relationship.destroy = function( req ) {
		console.log( 'Private.database.relationship.destroy', req );
	};

	Private.database.relationship.update = function( req ) {
		console.log( 'Private.database.relationship.update', req );
	};

	Private.database.relationship.read = function( req ) {
		console.log( 'Private.database.relationship.read', req );

		var data = req.data;
		var generic_callback = function( err, result ) {
			if( 'undefined' !== typeof err && null !== err ) {
				own_on_error( err );
			} else {
				own_on_success( result );
			}
		};
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};

		Private.db.getRelationshipById( id, generic_callback );

	};

	/* BEGIN */
	Private.node = Private.node || {};
	Private.node.validate = function( req ) {

		console.log( 'Private.entities validation', req );

		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};

		var own_on_complete = function( res ) {
			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, res );
			}
		};

		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};

		return true;

	};

	Private.node.createCreate = function( req ) {

			console.log( 'Private.entities.create', req );

			var target = 0
			, current = 0
			, results = []
			, own_on_success
			, own_on_complete
			, own_on_error
			, a = 0, alen = 0, aitem;

			var own_on_success = function( res ) {

				current += 1;

				if ( 'function' == typeof req.on_success ) {
					req.on_success( req, res, current );
				}

				results.push( res );

				if ( current === target ) {
					own_on_complete( res, current );
				}

			};

			var own_on_complete = function( res, count ) {

				if ( 'function' == typeof req.on_complete ) {
					req.on_complete( req, results, count );
				}

			};

			var own_on_error = function( res ) {

				current += 1;

				if ( 'function' == typeof req.on_error ) {
					req.on_error( req, res, current );
				}

				results.push( res );

				if ( current === target ) {
					own_on_complete( res, target );
				}

			};

			if ( Array.isArray( req.data ) ) {

				var a = 0, alen = req.len, aitem;
				target = alen;

				for( a = 0; a < alen; a += 1 ) {
					Private.database.node.create( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
				}

			} else {

				Private.database.node.create( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

			}
		
			return true;

	};

	Private.node.createDestroy = function( req ) {

		console.log( 'Private.entities.destroy', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;

			for( a = 0; a < alen; a += 1 ) {
				Private.database.node.destroy( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {

			Private.database.node.destroy( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}

		return true;

	};

	Private.node.update = function( req ) {

		console.log( 'Private.entities.update', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;

			for( a = 0; a < alen; a += 1 ) {
				Private.database.node.update( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {

			Private.database.node.update( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}

		return true;

	};

	Private.node.read = function( req ) {

		console.log( 'Private.entities.read', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;
			for( a = 0; a < alen; a += 1 ) {
				Private.database.node.read( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {

			Private.database.node.read( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}

		return true;

	};

	Private.relationship = Private.relationship || {};

	Private.relationship.validate = function( req ) {
		console.log( 'Private.entities validation', req );
		var own_on_success = function( res ) {
			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res );
			}
		};
		var own_on_complete = function( res ) {
			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, res );
			}
		};
		var own_on_error = function( res ) {
			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res );
			}
		};
		return true;
	};

	Private.relationship.create = function( req ) {

		console.log( 'Private.entities.create', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;

			for( a = 0; a < alen; a += 1 ) {
				Private.database.relationship.create( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {
			Private.database.relationship.create( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}
	
		return true;

	};

	Private.relationship.destroy = function( req ) {

		console.log( 'Private.entities.destroy', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;

			for( a = 0; a < alen; a += 1 ) {
				Private.database.relationship.destroy( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {

			Private.database.relationship.destroy( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}

		return true;

	};

	Private.relationship.update = function( req ) {

		console.log( 'Private.entities.update', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;

			for( a = 0; a < alen; a += 1 ) {
				Private.database.relationship.update( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {

			Private.database.relationship.update( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}

		return true;

	};

	Private.relationship.read = function( req ) {

		console.log( 'Private.entities.read', req );

		var target = 0
		, current = 0
		, results = []
		, own_on_success
		, own_on_complete
		, own_on_error
		, a = 0, alen = 0, aitem;

		var own_on_success = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_success ) {
				req.on_success( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, current );
			}

		};

		var own_on_complete = function( res, count ) {

			if ( 'function' == typeof req.on_complete ) {
				req.on_complete( req, results, count );
			}

		};

		var own_on_error = function( res ) {

			current += 1;

			if ( 'function' == typeof req.on_error ) {
				req.on_error( req, res, current );
			}

			results.push( res );

			if ( current === target ) {
				own_on_complete( res, target );
			}

		};

		if ( Array.isArray( req.data ) ) {

			var a = 0, alen = req.len, aitem;
			target = alen;

			for( a = 0; a < alen; a += 1 ) {
				Private.database.relationship.read( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );
			}

		} else {

			Private.database.relationship.read( { type: req.type, request: req, on_success: own_on_success, on_error: own_on_error } );

		}

		return true;

	};

	/* END CRUD */

	Private.schema = [
		{ singular: 'Person'
		, plural: 'People'
		, relationships:
				[ { 'People':
					[ 'MENTION'
					, 'FAMILY_WITH'
					, 'REPORT_TO'
					]
				, 'Place':
					[ 'MENTION'
					, 'RESIDE'
					]
				, 'Organization':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Idea':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Thing':
					[ 'MENTION'
					, 'OWN'
					, 'CREATE'
					]
				} ]
		, model:
			{ id: 'string'
			, display: 'string'
			}
		} ,
		{ singular: 'Organization'
		, plural: 'Organizations'
		, relationships:
				[ { 'People':
					[ 'MENTION' 
					]
				, 'Place':
					[ 'MENTION'
					, 'RESIDE'
					]
				, 'Organization':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Idea':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Thing':
					[ 'MENTION'
					, 'OWN'
					, 'CREATE'
					]
				} ]
		, model:
			{ id: 'string'
			, display: 'string'
			}
		} ,
		{ singular: 'Place'
		, plural: 'Places'
		, relationships:
				[ { 'People':
					[ 'MENTION' 
					]
				, 'Place':
					[ 'MENTION'
					, 'RESIDE'
					]
				, 'Organization':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Idea':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Thing':
					[ 'MENTION'
					, 'OWN'
					, 'CREATE'
					]
				} ]
		, model:
			{ id: 'string'
			, display: 'string'
			, latitude: 'number'
			, longitude: 'number'
			}
		} ,
		{ singular: 'Idea'
		, plural: 'Ideas'
		, relationships:
				[ { 'People':
					[ 'MENTION' 
					]
				, 'Place':
					[ 'MENTION'
					, 'RESIDE'
					]
				, 'Organization':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Idea':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Thing':
					[ 'MENTION'
					, 'OWN'
					, 'CREATE'
					]
				} ]
		, model:
			{ id: 'string'
			, display: 'string'
			}
		} ,
		{ singular: 'Thing'
		, plural: 'Things'
		, relationships:
				[ { 'People':
					[ 'MENTION' 
					]
				, 'Place':
					[ 'MENTION'
					, 'RESIDE'
					]
				, 'Organization':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Idea':
					[ 'INVEST_IN'
					, 'WORK_FOR'
					, 'MENTION'
					, 'CREATE'
					]
				, 'Thing':
					[ 'MENTION'
					, 'OWN'
					, 'CREATE'
					]
				} ]
		, model:
			{ id: 'string'
			, display: 'string'
			}
		}
	];

	/* Callback */

	Private.callback = function( err, result ) {
		if ( err ) {
			console.error( err );
		} else {	
			if ( 'undefined' !== typeof result.data ) {
				console.log( result.data );
			} else {
				console.log( result );
			}
		}
	};

	var Public = function( req ) {	
		var is_req =  ( 'undefined' !== typeof req && null !== req )
		, relationships = ( ( is_req && 'undefined' !== typeof req.relationships ) ? req.relationships : null )
		, attributes = ( ( is_req && 'undefined' !== typeof req.attributes ) ? req.attributes : null )
		, nodes = ( ( is_req && 'undefined' !== typeof req.relationships ) ? req.nodes : null )
		, x = 0, xlen = Private.schema.length, xitem
		, type, name;
		Private.node = Private.node || {};
		for ( x = 0; x < xlen; x += 1 ) {
			xitem = Private.schema[ x ].schema;
			name = Private.schema[ x ].singular;
			for ( type in xitem ) {
				if ( xitem.hasOwnProperty( type ) ) {
					var attr;
					for ( attr in xitem[ type ] ) {
						if ( xitem[ type ].hasOwnProperty( attr ) && 'function' === typeof xitem[ type ][ attr ] ) {

							if ( 'undefined' === typeof Private[ type ] ) {
								Private[ type ] = {};
							}
				
							if ( 'undefined' === typeof Private[ type ][ name ] ) {
								Private[ type ][ name ] = {};
							}
							Private[ type ][ name ][ attr ] = xitem[ type ][ attr ];

							if ( 'undefined' === typeof Private[ type ][ attr ] ) {
								Private[ type ][ attr ] = {};
							}	
							Private[ type ][ attr ][ name ] = xitem[ type ][ attr ];

						}
					}
				}
			}
		}
	};

	Public.prototype.create = function( req ) {
		console.log( 'Public.prototype.create', req );
		var datatype = req.datatype;
		delete req.datatype;
		console.log( Private );
		if ( 'node' === datatype ) {
			Private.node.create( req );
		} else if ( 'relationship' === datatype ) {
			Private.relationship.create( req );
		}
	};

	Public.prototype.read = function( req ) {
		console.log( 'Public.prototype.read', req );
		var datatype = req.datatype;
		delete req.datatype;
		if ( 'node' === datatype ) {
			Private.node.read( req );
		} else if ( 'relationship' === datatype ) {
			Private.relationship.read( req );
		}
	};

	Public.prototype.update = function( req ) {
		console.log( 'Public.prototype.update', req );
		var datatype = req.datatype;
		delete req.datatype;
		if ( 'node' === datatype ) {
			Private.node.update( req );
		} else if ( 'relationship' === datatype ) {
			Private.relationship.update( req );
		}
	};

	Public.prototype.destroy = function( req ) {
		console.log( 'Public.prototype.destroy', req );
		var datatype = req.datatype;
		delete req.datatype;
		if ( 'node' === datatype ) {
			Private.node.destroy( req );
		} else if ( 'relationship' === datatype ) {
			Private.relationship.destroy( req );
		}
	};

	return Public;

} )(); 

/* End Pulp */

var pulp = new Pulp();

var on_success = function(req,res) {
	console.log('success res',res);
};

var on_error = function(req,res) {
	console.log('error res',res);
};

for ( var x = 0; x < 1; x += 1 ) {
	pulp.create( { datatype: 'relationship', type: 'Person', to: Math.floor( Math.random()* 100 ), from: Math.floor( Math.random()* 100 ), data: { foo: 'bar' }, name: 'MENTION', on_success: on_success, on_error: on_error } );
	//pulp.create( { datatype: 'node', type: 'Person', data: { random: Math.floor( Math.random() * 10000 ), current: x }, on_success: on_success, on_error: on_error } );
}
