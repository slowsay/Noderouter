'use struct';

exports.route = function (handle, path) {
    console.log('route:' + path);
    if (typeof handle[path] === "function") {
        handle[path]();
    }
    else {
        console.log('not found:' + path);
    }
}