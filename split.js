// function splitStr(str) {

//     // Function to split string
//     var string = str.split(".");

//     console.log(string[1]);
// }

// // Initialize string
// var str = "Hello my name is Abhishek. I live in Ggn. I am 21 years old.";

// // Function call
// splitStr(str);

const fun = require("./fun")
const stopwords = require('stopwords').english

str =  "Pikachu is hungry.He is also thristy"
const sentences = fun.line_segmentation(str)
// console.log(sentences)
var len = sentences.length
var repo = [];
for (var i = 0;i<len;i++){
    var a = fun.word_segmentation(sentences[i]);
    repo.push(a);
}
console.log(repo[1].length)
str =  "Pikachu is hungry.He is also thristy"
const sentences = fun.line_segmentation(str)
var len = sentences.length
var repo = [];
for (var i = 0;i<len;i++){
    var a = fun.word_segmentation(sentences[i]);
    repo.push(a);
}
repo.filter((item) => {
    item.forEach((word) => {
        if(stopwords.includes(word)){
            str = str.replace(word,"")
        }
    })
})
lines = fun.line_segmentation(str)
console.log(lines)
// console.log(repo)

// for (var i = 0; i<len;i++){
//     var l = repo[i].length
//     for (var j = 0; j<l;j++){
//         // console.log(repo[i][j])

//         if(stopwords.includes(repo[i][j])){delete repo1[i][j]}
//         else{continue}
//         //     if (res[i][j] !== stopwords){
//     //         console.log(res[i][j]);
//     //         res1.push(res[i][j]);
//     //         break
//     //     }
//     }
// }
// const yolo = repo.filter(function(item){ if(!stopwords.includes(item)){return false} });


// const remove_stopwords= (repo) => {
//     repo.forEach((word)=>{
//         // if(stopwords.includes(word)){console.log('Yoho')}
//         // else{repo1.push(word)}
//         if (stopwords.includes(word)){console.log(word)}
//         else{console.log}
//     })
    
// }


// remove_stopwords(repo)
// console.log("******************")
// console.log(repo)
// console.log("******************")
// console.log(repo1)
