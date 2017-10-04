'use strict';
console.log([1,2,3,10,20].sort());

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x,y) {
            return x + y;
        });
    }
    return sum;
}
// var f = lazy_sum([1,2,3,4,5]);
// console.log(f);//返回的是sum函数
// console.log(f());//返回的是结果：15


function f1() {
    var n = 7888;
     function f2() {
        console.log(n);

    }
    return f2;
}

var res = f1 ();
console.log(res());
