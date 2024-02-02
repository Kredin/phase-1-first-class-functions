function receivesAFunction(x) {
    x()
}

function returnsANamedFunction() {
    return function namedFunction(){}
}

function returnsAnAnonymousFunction() {
    return function(){}
}