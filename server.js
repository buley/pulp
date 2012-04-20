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
	};

	Private.database.node.destroy = function( req ) {
		console.log( 'Private.database.node.destroy', req );
	};

	Private.database.node.update = function( req ) {
		console.log( 'Private.database.node.update', req );
	};

	Private.database.node.read = function( req ) {
		console.log( 'Private.database.node.read', req );
	};


	Private.database.relationship = {};

	Private.database.relationship.create = function( req ) {
		console.log( 'Private.database.relationship.create', req );
	};

	Private.database.relationship.destroy = function( req ) {
		console.log( 'Private.database.relationship.destroy', req );
	};

	Private.database.relationship.update = function( req ) {
		console.log( 'Private.database.relationship.update', req );
	};

	Private.database.relationship.read = function( req ) {
		console.log( 'Private.database.relationship.read', req );
	};


	Private.actions = [ 'create', 'read', 'update', 'destroy', 'validate' ];

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
		, validate: function( req ) {
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
			}
		, create: function( req ) {

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
						Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
			
				return true;


			}
		, destroy: function( req ) {

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
						Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

			}
		, update: function( req ) {

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
						Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
		
				return true;

			}
		, read: function( req ) {

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
						Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {
		
					Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

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
		, validate: function( req ) {
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
			}
		, create: function( req ) {

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
						Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
			
				return true;


			}
		, destroy: function( req ) {
		
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
						Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

			}
		, update: function( req ) {

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
						Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
		
				return true;

			}
		, read: function( req ) {

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
						Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {
		
					Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

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
		, validate: function( req ) {
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
			}
		, create: function( req ) {

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
						Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
			
				return true;

			}
		, destroy: function( req ) {

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
						Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

			}
		, update: function( req ) {

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
						Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
		
				return true;

			}
		, read: function( req ) {

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
						Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {
		
					Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

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
		, validate: function( req ) {
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
			}
		, create: function( req ) {

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
						Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
			
				return true;

			}
		, destroy: function( req ) {

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
						Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

			}
		, update: function( req ) {

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
						Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
		
				return true;

			}
		, read: function( req ) {

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
						Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {
		
					Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

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
		, validate: function( req ) {

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

			}
		, create: function( req ) {

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
						Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.create( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
			
				return true;

			}
		, destroy: function( req ) {

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
						Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.destroy( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

			}
		, update: function( req ) {

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
						Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {

					Private.database.node.update( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}
		
				return true;

			}
		, read: function( req ) {

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
						Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );
					}

				} else {
		
					Private.database.node.read( { type: this.singular, request: req, on_success: own_on_success, on_error: own_on_error } );

				}

				return true;

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
		, x = 0, xlen = Private.schema.length, xitem;
		Private.node = Private.node || {};
		for ( x = 0; x < xlen; x += 1 ) {
			xitem = Private.schema[ x ];
			var attr;
			for ( attr in xitem ) {
				if ( xitem.hasOwnProperty( attr ) && 'function' === typeof xitem[ attr ] ) {

					if ( 'undefined' === typeof Private.node[ xitem.singular ] ) {
						Private.node[ xitem.singular ] = {};
					}
					Private.node[ xitem.singular ][ attr ] = xitem[ attr ];

					if ( 'undefined' === typeof Private.node[ attr ] ) {
						Private.node[ attr ] = {};
					}	
					Private.node[ attr ][ xitem.singular ] = xitem[ attr ];

				}
			}				
		}
	};

	Public.prototype.create = function( req ) {
		if ( 'node' === req.datatype ) {
			Private.node[ req.type ].create( req );
		} else if ( 'relationship' === req.datatype ) {
			Private.relationship.create( req );
		}
	};

	Public.prototype.read = function( req ) {
		var type = req.type;
		delete req.type;
		if ( 'node' === type ) {
			Private.node[ req.type ].read( req );
		} else if ( 'relationship' === type ) {
			Private.relationship.read( req );
		}
	};

	Public.prototype.update = function( req ) {
		if ( 'node' === req.type ) {
			Private.node.update( req );
		} else if ( 'relationship' === req.type ) {
			Private.relationship.update( req );
		}
	};

	Public.prototype.destroy = function( req ) {
		if ( 'node' === req.type ) {
			Private.node.destroy( req );
		} else if ( 'relationship' === req.type ) {
			Private.relationship.destroy( req );
		}
	};

	return Public;

} )(); 

/* End Pulp */

var pulp = new Pulp();

var on_success = function(res) {
console.log('success',res);
};
var on_error = function(res) {
console.log('success',res);
};
pulp.create( { type: 'node', data: { foo: 'bar' }, on_success: on_success, on_error: on_error } );
