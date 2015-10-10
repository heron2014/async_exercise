var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp'); //create folder temp in current directory
console.log(dir);
var source = __filename;
var target = path.join(dir, 'target'); //target is in dir/temp

fs.mkdir(dir, handlingError(mkdriFunc));

function mkdriFunc() {
    fs.readFile(source, handlingError(haveFile));
}

function haveFile(content) {
    fs.writeFile(target, content, handlingError(wroteFile));
}

function wroteFile() {
    console.log('all done');
}

//handlingError return callback function which will take care of error handling
// because we are handling err in the same way in each above functions (DRY)
function handlingError(cb) {
    return function (err, result) {
        if (err) {
            handleError(err);
        } else {
            cb(result);
        }
    }
}

function handleError(err) {
    console.error(err);
}


