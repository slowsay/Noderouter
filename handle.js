'use struct';
//child_process为node模块
//非阻塞操作exec()
//ls -lah 是一个shell脚本
var process = require('child_process');
function start() {
    var con = 'empty';
    process.exec("ls -lah", function (error, out, stderr) {
        //response.writeHead(200, {"conent-type": "text/plain"});
        //response.write(out);
        //response.end();

    });
    //return con;
};
function upload(response) {
    console.log(response);
    //function sleep(ms) {
    //    var start = new Date().getTime();
    //    while (new Date().getTime() < start + ms);
    //}
    //
    //sleep(1000);
    //return "hello upload";
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}
exports.start = start;
exports.upload = upload;