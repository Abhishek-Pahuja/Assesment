const fun = require("./fun")
const stopwords = require('stopwords').english

str =  " yojhioh 9821639 , 5644135135acsahckbak ?56456456 ''54641"

function findNum (para){
  var sen = fun.line_segmentation(para);
  var len = sen.length
  var num = [];
  for (var i = 0;i<len;i++){
    num[i] = sen[i].replace(/\D/g,'');
  }
  num = num.filter(Number);
  return num;
}

console.log(findNum(str))