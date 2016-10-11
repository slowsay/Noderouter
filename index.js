'use struct';

var server = require('./server');
var router = require('./router');
var reshand = require('./handle');


var handle = {}
handle["/"] = reshand.start;
handle["/start"] = reshand.start;
handle["/upload"] = reshand.upload;

server.start(router.route, handle);