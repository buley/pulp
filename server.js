var graphs = require( './node_modules/graphs/lib/graphs.js' );
console.log('graphs',typeof graphs.connect);
graphs.debug();
graphs.connect( 'http://localhost:7474' );

var id = Math.floor( Math.random()* 10 );
var rand = Math.floor( Math.random()* 100 );

var on_success = function(req,res) {
	console.log('success res',req,res);
	graphs.read( { datatype: 'index', index: 'HELLO', index_type: 'relationship', key: 'seed', value: rand, on_success: function( req2, res2 ) {
		console.log( 'graphs.read MENTION index > on_success', req2, res2 );
	} , on_error: on_error, on_complete: function( req2, res2 ) {
		console.log( 'graphs.read MENTION index > on_complete', req2, res2 );
	}  } );
};

var on_complete = function( req,res ) {
	console.log('complete res',res);
};

var on_error = function(req,res) {
	console.log('error res',res);
};

var v1 = Math.floor( Math.random()* 10 );
var v2 = Math.floor( Math.random()* 10 );

for ( var x = 0; x < 1; x += 1 ) {
	graphs.create( { datatype: 'node', data: { seed: v1 }, on_success: function( req1, res1 ) {
	
		console.log( "NODE 1 CREATED", res1 );
		graphs.create( { datatype: 'node', data: { seed: v2 }, on_success: function( req2, res2 ) {
			
			console.log( "NODE 2 CREATED", res2 );
			graphs.create( { datatype: 'relationship', to: res2.id, from: res1.id, data: { seed: v1 + '-' + v2 }, name: 'HELLO_WORLD', on_success: function( req3, res3 ) {

				console.log( "RELATIONSHIP 1 CREATED", res3 );
				graphs.create( { datatype: 'index', id: res3.id, index_type: 'relationship', index: 'HELLO_WORLD', data: { seed: v1 + '-' + v2 }, on_success: function( req4, res4 ) {
	
						console.log( "RELATIONSHIP 1 INDEXED", res4 );
		
				} , on_error: on_error } );
			}, on_error: on_error } );
		}, on_error: on_error } );
	}, on_error: on_error } );
}

	//graphs.create( { datatype: 'relationship', to: Math.floor( Math.random()* 100 ), from: Math.floor( Math.random()* 100 ), data: { foo: 'bar' }, name: 'MENTION', on_success: on_success, on_error: on_error } );
	//graphs.create( { datatype: 'node', data: { seed: Math.floor( Math.random() * 10000 ), current: x }, on_success: on_success, on_error: on_error } );
	//graphs.create( { datatype: 'index', id: id, index: 'something_new', data: { seed: rand }, on_success: on_success, on_error: on_error } );
	//graphs.create( { datatype: 'index', id: id, index: 'MENTION', data: { seed: rand }, on_success: on_success, on_error: on_error } );


/* Test Relationship Indexes */

