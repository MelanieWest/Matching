//will this make sense to the server? Or
// should this be with the front end?
// this would format the person taking
// the test, with their answers

var newChar = function(name, answers){
 this.name = name;
 for (var i = 0; i<answers.length; i++){
     this.answers.push(answers[i]);
 }
};

module.exports = newChar;