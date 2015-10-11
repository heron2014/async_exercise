module.exports = function composeCalls(args, cb) {
//calls might finish in different time, i.e call3, call1, call2
    var pending = 0;
    var results = [];
    var calledBack = false;

    call1(args, handleResults());
    call2(args, handleResults());
    call3(args, handleResults());


    function handleResults() {

        var order = pending;
        pending += 1;

        return function (err, result) {
            pending -= 1;
            if (err) {
                callback(err);
            } else {
                results[order] = result;
                if (!pending) {
                    callback(null, results);
                }
            }
        }
    }

    function callback(err, value) {

        if(!calledBack) {
            calledBack = true;
            cb(err, value);
        }
    }
};

//to check error handling replace null with new Error('something happened') and check if callback has been called once
function call1(args, cb) {
    setTimeout(cb, randomTimeout(), null, 1);
}

function call2(args, cb) {
    setTimeout(cb, randomTimeout(), null, 2);
}
function call3(args, cb) {
    setTimeout(cb, randomTimeout(), null, 3);
}

function randomTimeout() {
    return Math.floor(Math.random() * 1000);
}

//function randomValue() {
//    return Math.floor(Math.random() * 10);
//}


