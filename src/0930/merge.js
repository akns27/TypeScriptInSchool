var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(a, b) {
    return __assign(__assign({}, a), b //spread
    );
}
var merged = merge({ foo: 1 }, { bar: 1 }); //객체로 결합
console.log(merged);
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
console.log(wrapped);
