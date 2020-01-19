function news1() {
    const cons = Array.prototype.shift.call(arguments);
    const obj = Object.create(cons.prototype);
    const ret = cons.apply(obj, arguments);
    return ret instanceof Object ? ret : obj;
}

function news2() {
    const cons = Array.prototype.shift.call(arguments);
    const obj = new Object;
    obj.__proto__ = cons.prototype;
    const ret = cons.apply(obj, arguments);
    return ret instanceof Object ? ret : obj;
}