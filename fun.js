const stopwords = require('stopwords').english

function line_segmentation(para){

    var desired = para.replace(/[^\w\s]/gi, '.')
    var strings = desired.split(".");
    var filtered = strings.filter(function (el) {
        return (el !== (undefined || null || ''));
      });
    return filtered
}

function word_segmentation(para){
    var desired = para.replace(/[^\w\s]/gi, '.')
    var words = desired.split(/[\s.]+/)
    var filtered = words.filter(function (el) {
        return (el !== (undefined || null || ''));
      });
    return filtered
}

function remove_stopwords(para){
    const sentences = line_segmentation(para)
    var len = sentences.length
    var repo = [];
    for (var i = 0;i<len;i++){
        var a = word_segmentation(sentences[i]);
        repo.push(a);
    }
    repo.filter((item) => {
        item.forEach((word) => {
            if(stopwords.includes(word)){
                para = para.replace(word,"")
            }
        })
    })
    lines = line_segmentation(para)
    return lines
}

function remove_repeated(para){
    para = para.toUpperCase();
    var sen = line_segmentation(para);
    var len  = sen.length
    var uniqueList = [];
    for (var i = 0;i<len;i++){
      uniqueList[i]=sen[i].split(' ').filter(function(item,i,allItems){
        return i==allItems.indexOf(item);
      }).join(' ');  
    }
     return uniqueList;
  }

  function reverseWords(str) {
    var sen = line_segmentation(str);
    var len = sen.length
    var revSen = [];
    for (var i=0;i<len;i++){
      const allWords = sen[i].split(" ")
      revSen[i] = allWords.map(item => item.split("").reverse().join("")).join(" ")
    }
    return revSen
  }

  function findNum (para){
    var sen = line_segmentation(para);
    var len = sen.length
    var num = [];
    for (var i = 0;i<len;i++){
      num[i] = sen[i].replace(/\D/g,'');
    }
    num = num.filter(Number);
    return num;
  }

module.exports = {
    line_segmentation : line_segmentation,
    word_segmentation : word_segmentation,
    remove_stopwords : remove_stopwords,
    remove_repeated : remove_repeated,
    reverseWords : reverseWords,
    findNum : findNum
}

str =  " pikachu Pikachu. kah jaa rahe ho ho ho . ho ho"

console.log(remove_repeated(str))