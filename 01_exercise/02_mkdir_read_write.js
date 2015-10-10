var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp'); //create folder temp in current directory
console.log(dir);
var source = __filename;
var target = path.join(dir, 'target'); //target is inside dir which is temp

fs.mkdir(dir,function (err) {
    if (err) {
        handleError(err);
    } else {
        fs.readFile(source, function (err, content) {
            if (err) {
                handleError(err);
            } else {
                fs.writeFile(target, content, function (err) {
                    if (err) {
                        handleError(err);
                    } else {
                        console.log('all done');
                    }
                });
            }
        });
    }
});

function handleError(err) {
    console.error(err);
}
