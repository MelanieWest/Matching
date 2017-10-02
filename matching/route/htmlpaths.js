const path = require("path");

//interprets inputs on search line to find html pages. Need to
//reference their location from current location of this file

module.exports = function(app){
 

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"));
})

};      //end of module.exports