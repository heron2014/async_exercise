// composeCalls makes three calls to external services (we will fake them for simplicity)
// composeCalls is taking any args and cb function for operation which either is complete or have errors
// call1, call2, call3 takes args and also is wrapping callback function in handlingError
//none of these operations depends on each other
module.exports = function composeCalls(args, cb) {
    call1(args, handlingError(function(result1) {
        call2(args, handlingError(function(result2) {
            call3(args, handlingError(function(result3) {
                return cb(null, [result1, result2, result3]);
            }));
        }));
    }));

// handlingError is a wrapper of cb function, which takes err and results as parameter
// if there is an error it takes care of err otherwise it calls continuation fn with our results
    function handlingError(fn) {
        return function (err, results) {
            if (err) {
                cb(err);
            } else {
                fn(results);
            }
        }
    }
};

// Calls (fake one using setTimeout to simulate async call)
// setTimeout usually takes function and elapsing time as args but in our case
// null and randomValue are injected in cb
function call1(args, cb) {
    setTimeout(cb, randomTimeout(), null, randomValue());
}

function call2(args, cb) {
    setTimeout(cb, randomTimeout(), null, randomValue());
}
function call3(args, cb) {
    setTimeout(cb, randomTimeout(), null, randomValue());
}

function randomTimeout() {
    return Math.floor(Math.random() * 1000);
}

function randomValue() {
    return Math.floor(Math.random() * 10);
}

