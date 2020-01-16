function deepClone1(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    var result = Array.isArray(obj) ? [] : {};

    // 拷贝Symbols
    const sym = Object.getOwnPropertySymbols(obj);
    sym.forEach(function (item) {
        if (Object.prototype.toString.call(obj[item]) === '[object Object]') {
            result[item] = deepClone1(obj[item]);
        } else {
            result[item] = obj[item];
        }
    });

    // 拷贝其他值
    for (var key in obj) {
        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            result[key] = deepClone1(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }

    return result;
}

// ES6
function deepClone2(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    let result = Array.isArray(obj) ? [] : {};

    Reflect.ownKeys(obj).forEach(item => {
        if (Object.prototype.toString.call(obj[item]) === '[object Object]') {
            result[item] = deepClone2(obj[item]);
        } else {
            result[item] = obj[item];
        }
    });

    return result;
}