function instance(left, right) {
    while (true) {
        if (left.__proto__ === right.prototype) {
            return true;
        } else if (left.__proto__ === null) {
            return false;
        } else {
            left = left.__proto__;
        }
    }
}