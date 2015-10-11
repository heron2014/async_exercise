var operations = require('./01_operations.js');

operations({some: 'args'}, function(err, results) {
    if (err) {
        console.error(err);
    } else {
        console.log('successful result ', results);
    }
});
