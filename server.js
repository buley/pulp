var graphs = require( 'graphs' );
console.log('graphs',typeof graphs.connect);
graphs.connect( 'http://localhost:7474' );
var on_success = function(req,res) {
	console.log('success res',res);
};

var on_error = function(req,res) {
	console.log('error res',res);
};

for ( var x = 0; x < 1; x += 1 ) {
	pulp.create( { datatype: 'relationship', to: Math.floor( Math.random()* 100 ), from: Math.floor( Math.random()* 100 ), data: { foo: 'bar' }, name: 'MENTION', on_success: on_success, on_error: on_error } );
	//pulp.create( { datatype: 'node', data: { random: Math.floor( Math.random() * 10000 ), current: x }, on_success: on_success, on_error: on_error } );
}
