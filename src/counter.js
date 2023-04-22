var createCounter = function (n) {
    return function count() {
        return n++
    };
};

export {
    createCounter
}