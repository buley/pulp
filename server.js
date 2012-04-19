/* pulp */

var neo4j = require( 'neo4j' );
var db = new neo4j.GraphDatabase( 'http://localhost:7474' );

var pulp = {};
pulp.actions = [ 'add', 'remove' ];
pulp.entities = [
	{ singular: 'person'
	, plural: 'people'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( obj ) {
			console.log( 'pulp.entities validation', obj );
			return true;
		}
	} ,
	, create: function( obj ) {
			console.log( 'pulp.entities.create', obj );
			return true;
		}
	, remove: function( obj ) {
			console.log( 'pulp.entities.remove', obj );
			return true;
		}
	} ,
	, update: function( obj ) {
			console.log( 'pulp.entities.update', obj );
			return true;
		}
	, read: function( obj ) {
			console.log( 'pulp.entities.read', obj );
			return true;
		}
	} ,
	{ singular: 'organization'
	, plural: 'organizations'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( obj ) {
			console.log( 'pulp.entities validation', obj );
			return true;
		}
	, create: function( obj ) {
			console.log( 'pulp.entities.create', obj );
			return true;
		}
	, remove: function( obj ) {
			console.log( 'pulp.entities.remove', obj );
			return true;
		}
	, update: function( obj ) {
			console.log( 'pulp.entities.update', obj );
			return true;
		}
	, read: function( obj ) {
			console.log( 'pulp.entities.read', obj );
			return true;
		}
	} ,
	{ singular: 'places'
	, plural: 'places'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( obj ) {
			console.log( 'pulp.entities validation', obj );
			return true;
		}
	, create: function( obj ) {
			console.log( 'pulp.entities.create', obj );
			return true;
		}
	, remove: function( obj ) {
			console.log( 'pulp.entities.remove', obj );
			return true;
		}
	, update: function( obj ) {
			console.log( 'pulp.entities.update', obj );
			return true;
		}
	, read: function( obj ) {
			console.log( 'pulp.entities.read', obj );
			return true;
		}
	} ,
	{ singular: 'idea'
	, plural: 'ideas'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( obj ) {
			console.log( 'pulp.entities validation', obj );
			return true;
		}
	, create: function( obj ) {
			console.log( 'pulp.entities.create', obj );
			return true;
		}
	, remove: function( obj ) {
			console.log( 'pulp.entities.remove', obj );
			return true;
		}
	, update: function( obj ) {
			console.log( 'pulp.entities.update', obj );
			return true;
		}
	, read: function( obj ) {
			console.log( 'pulp.entities.read', obj );
			return true;
		}
	} ,
	{ singular: 'thing'
	, plural: 'things'
	, model:
		{ id: 'string'
		, display: 'string'
		}
	, validation: function( obj ) {
			console.log( 'pulp.entities validation', obj );
			return true;
		}
	, create: function( obj ) {
			console.log( 'pulp.entities.create', obj );
			return true;
		}
	, remove: function( obj ) {
			console.log( 'pulp.entities.remove', obj );
			return true;
		}
	, update: function( obj ) {
			console.log( 'pulp.entities.update', obj );
			return true;
		}
	, read: function( obj ) {
			console.log( 'pulp.entities.read', obj );
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

