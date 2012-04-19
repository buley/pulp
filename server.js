/* pulp */

var neo4j = require( 'neo4j' );


var pulp = {};

/* Neo4J Database */

pulp.db = new neo4j.GraphDatabase( 'http://localhost:7474' );

/* Database API */

pulp.database = {};

pulp.database.node = {};

pulp.database.node.create = function( req, obj ) {
	console.log( 'pulp.database.node.create', req, obj );
};

pulp.database.node.destroy = function( req, obj ) {
	console.log( 'pulp.database.node.destroy', req, obj );
};

pulp.database.node.update = function( req, obj ) {
	console.log( 'pulp.database.node.update', req, obj );
};

pulp.database.node.read = function( req, obj ) {
	console.log( 'pulp.database.node.read', req, obj );
};


pulp.database.relationship = {};

pulp.database.relationship.create = function( req, obj ) {
	console.log( 'pulp.database.relationship.create', req, obj );
};

pulp.database.relationship.destroy = function( req, obj ) {
	console.log( 'pulp.database.relationship.destroy', req, obj );
};

pulp.database.relationship.update = function( req, obj ) {
	console.log( 'pulp.database.relationship.update', req, obj );
};

pulp.database.relationship.read = function( req, obj ) {
	console.log( 'pulp.database.relationship.read', req, obj );
};





pulp.actions = [ 'add', 'remove' ];
pulp.entities = [
	{ singular: 'person'
	, plural: 'people'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( req ) {
			console.log( 'pulp.entities validation', req );
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
			console.log( 'pulp.entities.create', req );
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
	, destroy: function( req ) {
			console.log( 'pulp.entities.destroy', req );
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
	, update: function( req ) {
			console.log( 'pulp.entities.update', req );
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
	, read: function( req ) {
			console.log( 'pulp.entities.read', req );
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
	} ,
	{ singular: 'organization'
	, plural: 'organizations'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( req ) {
			console.log( 'pulp.entities validation', req );
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
			console.log( 'pulp.entities.create', req );
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
	, destroy: function( req ) {
			console.log( 'pulp.entities.destroy', req );
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
	, update: function( req ) {
			console.log( 'pulp.entities.update', req );
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
	, read: function( req ) {
			console.log( 'pulp.entities.read', req );
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
	} ,
	{ singular: 'place'
	, plural: 'places'
	, model:
		{ id: 'string'
		, display: 'string'
		, latitude: 'number'
		, longitude: 'number'
		}
	, validation: function( req ) {
			console.log( 'pulp.entities validation', req );
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
			console.log( 'pulp.entities.create', req );
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
	, destroy: function( req ) {
			console.log( 'pulp.entities.destroy', req );
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
	, update: function( req ) {
			console.log( 'pulp.entities.update', req );
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
	, read: function( req ) {
			console.log( 'pulp.entities.read', req );
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
	} ,
	{ singular: 'idea'
	, plural: 'ideas'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( req ) {
			console.log( 'pulp.entities validation', req );
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
			console.log( 'pulp.entities.create', req );
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
	, destroy: function( req ) {
			console.log( 'pulp.entities.destroy', req );
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
	, update: function( req ) {
			console.log( 'pulp.entities.update', req );
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
	, read: function( req ) {
			console.log( 'pulp.entities.read', req );
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
	} ,
	{ singular: 'thing'
	, plural: 'things'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( req ) {
			console.log( 'pulp.entities validation', req );
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
			console.log( 'pulp.entities.create', req );
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
	, destroy: function( req ) {
			console.log( 'pulp.entities.destroy', req );
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
	, update: function( req ) {
			console.log( 'pulp.entities.update', req );
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
	, read: function( req ) {
			console.log( 'pulp.entities.read', req );
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
	}
];

/* setup */

//TODO: Valid entities ( have singular, plural, model obj, validator ) or server dies

pulp.vars = {};

// namespace setup
pulp.namespace = {};
for ( pulp.vars.attr in pulp.entities ) {
	if ( pulp.entities.hasOwnProperty( pulp.vars.attr ) ) {
		pulp.namespace[ pulp.vars.attr.plural ] = {};
	}
} 

/* callbacks */

pulp.callback = function( err, result ) {
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


//var node = db.createNode( { hello: 'world' } );
//node.save( pulp.callback );

db.getNodeById( 1, pulp.callback );

//db.getRelationshipById( 1, pulp.callback );

/* people */

pulp.person.get = function( req ) {
	console.log( 'pulp.person.get', req );
};

pulp.people.get = function( req ) {
	console.log( 'pulp.people.get', req );
};

pulp.person.create = function( req ) {
	console.log( 'pulp.person.create', req );
};

pulp.people.create = function( req ) {
	console.log( 'pulp.people.create', req );
};


/* topics */

pulp.topic.get = function( req ) {
	console.log( 'pulp.topic.get', req );
};

pulp.topics.get = function( req ) {
	console.log( 'pulp.topics.get', req );
};

pulp.topic.create = function( req ) {
	console.log( 'pulp.topic.create', req );
};

pulp.topics.create = function( req ) {
	console.log( 'pulp.topics.create', req );
};


/* items */

pulp.item.get = function( req ) {
	console.log( 'pulp.item.get', req );
};

pulp.items.get = function( req ) {
	console.log( 'pulp.items.get', req );
};

pulp.item.create = function( req ) {
	console.log( 'pulp.item.create', req );
};

pulp.items.create = function( req ) {
	console.log( 'pulp.items.create', req );
};

