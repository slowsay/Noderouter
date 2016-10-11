'use struct';
//node 服务器端执行脚本
var http = require('http');
var url=require('url');

function start(router,handle) {
    function onResponse(request, response) {
        var path=url.parse(request.url).pathname;
        console.log('>>>>>>>'+path);
        //router(handle,path,response);
        //response.writeHead(200, {"content-type": "text/plain"});
        //response.write("test");
        //response.end();
    }

    http.createServer(onResponse).listen(3000);
}
exports.start = start;