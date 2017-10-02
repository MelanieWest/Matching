var char = require("../data/characters");
var quest = require("../data/questions");
var answerArray = require("../data/answers")

//require the objects we're using to store data


// this function stores and retrieves data from a new, virtual
// directory called /api/.  There are two virtual subdirectories
// of this:  /api/tables  and /api/wait.  The above arrays are
//object arrays that determine the form of the data. 

module.exports = function(app){

    //the next two 'get' actions retrieve the stored data

app.get("/api/ans", function(req, res){
  res.json(answerArray);
}); 

app.get("/api/char", function(req, res){
  res.json(char);
});

app.get("/api/quest",function(req,res){
    res.json(quest);
})

 // req = data received (request);
 // res = data being returned (response)

 app.post("/api/ans",function(req,res){
   //send answers to the array

       answerArray.push(req.body);
  
 });


}   //end of module.exports