Function.prototype.binds = function(context) {
    const self = this,
        args = Array.prototype.slice.call(arguments, 1);

    const result = function () {
        const bindArgs = Array.from(arguments);
        return self.apply(
            this instanceof result ? this : context, // 判断是不是构造函数，改变this指向
            args.concat(bindArgs)
        );
    }
    result.prototype = Object.create(this.prototype); // 继承prototype

    return result;
}

Function.prototype.calls = function(context) { // ES3
    context = context ? Object(context) : window;
    context.fn = this;
    var args = [];
    for(var i = 1;i < arguments.length;i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}

Function.prototype.calls = function(context) { // ES6
    context = context ? Object(context) : window;
    context.fn = this;
    const args = Array.from(arguments).slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.applys = function(context, arr) {
    context = context ? Object(context) : window;
    context.fn = this;
    let result;
    arr ? result = context.fn(...arr) : result = context.fn();
    delete context.fn;
    return result;
}