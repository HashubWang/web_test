'use strict';

var height = parseFloat(prompt('请输入身高(m) :'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var bmi = weight/(height*height)
if (bmi>32) {
    alert("严重肥胖")
}  else if(bmi > 28) {
    alert("肥胖")
}  else if(bmi >25){
    alert("guozhong")

}  else if (bmi >18.5){
    alert("正常")
}  else {
    alert("过轻")
}

