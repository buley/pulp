var graphs = require( './node_modules/graphs/lib/graphs.js' );
console.log('graphs',typeof graphs.connect);
graphs.connect( 'http://localhost:7474' );

var on_success = function(req,res) {
	console.log('success res',res);
	graphs.create( { datatype: 'index', index: 'random', data: { random: 'bar' }, name: 'MENTION', on_success: on_success, on_error: on_error } );
};

var on_error = function(req,res) {
	console.log('error res',res);
};

for ( var x = 0; x < 100; x += 1 ) {
	graphs.create( { datatype: 'relationship', to: Math.floor( Math.random()* 100 ), from: Math.floor( Math.random()* 100 ), data: { foo: 'bar' }, name: 'MENTION', on_success: on_success, on_error: on_error } );
	//graphs.create( { datatype: 'node', data: { random: Math.floor( Math.random() * 10000 ), current: x }, on_success: on_success, on_error: on_error } );
}
