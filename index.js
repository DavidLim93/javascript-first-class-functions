

function receivesAFunction(spy) {
   
    return spy();
}

function returnsANamedFunction() {
    var fn = returnsANamedFunction;
    return fn;
}


function returnsAnAnonymousFunction () {
    return function () {
        console.log('')
    };
}
