# Noderouter

>基于node.js,依托node服务器平台,建立http服务网站应用,并带路由功能，
>如果需要在node服务器端跑站点,还是用express,目前只是测试性能,及阻塞问题

## install
npm init

npm start

## example

```
var http=require('http');
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
    function pp(fun,v){
        fun(v);
    }

    pp(function(e){console.log(e)},'hello');
}
exports.start = start;

```

## Feature
- http
- url





