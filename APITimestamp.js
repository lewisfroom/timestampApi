var express = require("express");
var app = express();
var getMon = function(month){
    switch(month){
        case 0:
            return("January");
        case 1:
            return("February");
        case 2:
            return("March");
        case 3:
            return("April");
        case 4:
            return("May");
        case 5:
            return("June");
        case 6:
            return("July");
        case 7:
            return("August");
        case 8:
            return("September");
        case 9:
            return("October");
        case 10:
            return("November");
        case 11:
            return("December");
    }
};
app.get("/:time", function(req,res){
    var timeStamp = new Date(req.params.time);
    res.set("Content-Type","application/json");
    if (isNaN(timeStamp)){
        //need to check for unix timestamp also
        res.send(JSON.stringify({"unix":"null", "natural":"null"}));
    } else {
        res.send(JSON.stringify({"unix":timeStamp.getTime(), "natural": timeStamp.getDate() + " " + getMon(timeStamp.getMonth()) + ", " + timeStamp.getFullYear()}));
    }
});

app.listen(process.env.PORT, process.env.IP);