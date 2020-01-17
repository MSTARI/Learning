function fun1(data) { // 高阶函数
    return data.filter((item, index) => data.indexOf(item) === index);
}

function fun2(data) { // 普通方法
    let result = [];
    for (let i = 0;i < data.length;i++) {
        !result.includes(data[i]) && result.push(data[i]);
    }
    return result;
}

function fun3(data) { // Set实现
    return Array.from(new Set(data));
}