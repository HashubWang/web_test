var x = 13;
var result = x/0;
if (result == Infinity) {
    console.log("result is infinity");
}
else{
    console.log("result is not infinity");
}
var num = 0/0;

console.log(num);

var x = 0;
var i;
for (i=1; i<=10; i++) {
    x = x + i;
    console.log(x);
}
console.log(x);
console.log("-----------------------")
var t = 0;
for (var i = 0; i <= 10; i++) {
    t = t + 1;
    console.log(t);
}
console.log(t);