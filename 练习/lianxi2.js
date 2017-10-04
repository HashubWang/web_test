'use strict';

var count = 0;
var oldParseInt = parseInt; // 保存原函数

global.parseInt = function () {
    count += 1;
    return console.log(oldParseInt.apply(null,arguments)); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log(count); // 3

var i =0 
//do {
//   i += 1;
//   console.log(i);
//} while (i < 5);

while (i <5) {
    i += 1;
    console.log(i);
}