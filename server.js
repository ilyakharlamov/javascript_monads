var connect = require('connect');
var url = require('url');
/*connect.createServer(
    connect.static(__dirname)
).listen(8080);*/

/*var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static( __dirname ))
  .use(connect.query())
  .use(function(req, res){
  	var query = url.parse(req.url, true).query;
  	console.log('query is ', query);
	res.end(JSON.stringify( {id:query.id} ));
  })
 .listen(8080);*/

var books = {
	1 : "alice",
	2 : "bob",
	5 : "carol",
};
var bookids = Array.prototype.map.call(books, function (i) {
	return i;
});
var CONTENTTYPEJSON = 'application/json';

var express = require('express');
var app = express();
app.use(express.static( __dirname ))
	.get(['/books/', '/books'], function (req, res) {
		res.type(CONTENTTYPEJSON)
		res.end(JSON.stringify( Object.keys (books) ));
	})
	.get('/books/:id', function(req, res) {
		var id = req.params.id;
		res.type(CONTENTTYPEJSON); // set content-type
		res.end( books[id] ); // send text response
	});

app.listen( 8080 );
