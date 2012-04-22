var graphs = require( './node_modules/graphs/lib/graphs.js' );
console.log('graphs',typeof graphs.connect);
graphs.debug();
graphs.connect( 'http://localhost:7474' );

var id = Math.floor( Math.random()* 100 );

var on_success = function(req,res) {
	console.log('success res',req,res);
	graphs.read( { datatype: 'index', index: 'something_new', key: 'random', value: 25, on_success: on_success, on_error: on_error, on_complete: on_complete } );
};
var on_complete = function( req,res ) {
	console.log('complete res',res);
};
var on_error = function(req,res) {
	console.log('error res',res);
};

var rand = Math.floor( Math.random()* 100 );

for ( var x = 0; x < 10; x += 1 ) {
	graphs.create( { datatype: 'index', id: id, index: 'something_new', data: { random: 25 }, on_success: on_success, on_error: on_error } );
}

//graphs.create( { datatype: 'relationship', to: Math.floor( Math.random()* 100 ), from: Math.floor( Math.random()* 100 ), data: { foo: 'bar' }, name: 'MENTION', on_success: on_success, on_error: on_error } );
//graphs.create( { datatype: 'node', data: { random: Math.floor( Math.random() * 10000 ), current: x }, on_success: on_success, on_error: on_error } );
//graphs.create( { datatype: 'index', id: id, index: 'something_new', data: { random: 25 }, on_success: on_success, on_error: on_error } );
