function debounce(callback, delay, immediate) {
    let timer = null;
    return function() {
        const context = this,
            args = arguments;
        timer && clearTimeout(timer);
        immediate && !timer && callback.apply(context, args); // 首次立即触发
        timer = setTimeout(function() {
            callback.apply(context, args);
        }, delay);
    }
}

function throttle(callback, delay) { // 定时器版
    let timer = null;
    return function() {
        const context = this,
            args = arguments;
        if(!timer) {
            timer = setTimeout(function() {
                timer = null;
                callback.apply(context, args);
            }, delay);
        }
    };
}

function throttle(callback, delay) { // 时间戳版
    let start = 0;
    return function() {
        const now = Date.now();
        if(now - start > delay) {
            start = now;
            callback.apply(this, arguments);
        }
    }
}