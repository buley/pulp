		{ validate: function( req ) {
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
							Private.database.relationship.create( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );
						}

					} else {
						Private.database.relationship.create( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );

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
							Private.database.relationship.destroy( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );
						}

					} else {

						Private.database.relationship.destroy( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );

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
							Private.database.relationship.update( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );
						}

					} else {

						Private.database.relationship.update( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );

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
							Private.database.relationship.read( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );
						}

					} else {
			
						Private.database.relationship.read( { type: 'Idea', request: req, on_success: own_on_success, on_error: own_on_error } );

					}

					return true;

				}

			}


