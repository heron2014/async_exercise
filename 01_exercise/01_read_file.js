var fs = require('fs');

fs.readFile(__filename, {encoding: 'utf8'}, gotFileContent);

function gotFileContent(err, content) {
    if (err) {
        console.error(err);
    } else {
        console.log('This is a file content:\n\n%s', content);
    }
}

