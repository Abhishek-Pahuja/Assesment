const express = require("express");
const bodyParser = require("body-parser")
const fun = require("./fun");
const stopwords = require('stopwords').english;

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

var port  = process.env.PORT|| 3000

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var para = String(req.body.para);

  res.write("\n \n Entered String:- \n \n "+para);

  res.write("\n ---------------------------------------------------------------------");

  res.write("\n \n Sentence Segmentation - \n \n ");

  var strings = fun.line_segmentation(para);
  var len = strings.length;
  for(var i = 0; i< len; i++){
    res.write(strings[i]);
    if(i<len-2){res.write("  | ")};
  }

  res.write("\n ---------------------------------------------------------------------");

  res.write("\n Word Segmentation - \n \n ");

  var words = fun.word_segmentation(para);
  var len = words.length;

  for(var i = 0; i< len; i++){
    res.write(words[i]);
    if(i<len-1){res.write("  | ")};
  }

  res.write("\n ---------------------------------------------------------------------");

  res.write("\n Removing Stop Words in Individual Sentence - \n \n ");

  var lines = fun.remove_stopwords(para);
  var len = lines.length;

  for(var i = 0; i< len; i++){
    res.write(lines[i]);
    if(i<len-1){res.write("  |  ")};
  }

  res.write("\n ---------------------------------------------------------------------");

  res.write("\n Removing Repeated Words in Individual Sentences :- \n \n ");

  var lines = fun.remove_repeated(para);
  var len = lines.length;

  for(var i = 0; i< len; i++){
    res.write(lines[i]);
    if(i<len-2){res.write("  |  ")};
  }

  res.write("\n ---------------------------------------------------------------------");

  res.write("\n Reversing Words in Individual Sentences :- \n \n ");

  var lines = fun.reverseWords(para);
  var len = lines.length;

  for(var i = 0; i< len; i++){
    res.write(lines[i]);
    if(i<len-2){res.write("  |  ")};
  }

  res.write("\n ---------------------------------------------------------------------");

  res.write("\n Finding Numbers in Individual Sentences :- \n \n ");

  var lines = fun.findNum(para);
  var len = lines.length;

  for(var i = 0; i< len; i++){
    res.write(lines[i]);
    if(i<len-2){res.write("  |  ")};
  }

  res.end();
  }

);


app.listen(port, function(){
  console.log("server is running on port 3000");
})
