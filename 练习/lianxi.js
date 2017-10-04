'use strict';

function foo(a,b) {
    var i , rest = [];
    if (arguments.length>2){
        for (i = 2; i< arguments.length; i++){
            rest.push(arguments[i]);
        }

    }
    console.log('a = '+ a);
    console.log('b = '+ b);
    console.log(rest);
    }
        

function _of_circle(r,pi){
    var area;
        if (pi === undefined){
        pi = 3.14;
    }
    area = pi * r * r;
    return area;
}
console.log(area_of_circle(2));
console.log(area_of_circle(2,3.1416));

var xiaoming = {
    name:'小明',
    birth: 1998,
    age: function(){
        var y = new Date().getFullYear();
        return console.log( y - this.birth);
    }

};

xiaoming.age();
