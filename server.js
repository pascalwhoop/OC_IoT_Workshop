//dependencies
var express = require('express');
var hueControl = require('./local_modules/hueControl.js');
var ratingLogger = require('./local_modules/ratingHistory.js');


/* ########     app creationand configuration      ########*/
var app = express();
//to be able to extract the javascript object from the body of a request
app.use(express.bodyParser());

//to not exit everything if an error is thrown
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});


//host our workshop application as well as its static content
app.use('/', express.static(__dirname + '/'));
app.use('/static/app/bower_components/', express.static(__dirname + '/static/bower_components'));


var userRequests = {};

//every user in the workshop calls this once he calls the website
app.post('/api/user/:username', function (req, res) {
    var username = req.params.username;


    //if user does not yet exist add him
    if (!userRequests[username]) {
        console.log("user " + username + " joined the workshop");
        userRequests[username] = {
            speed: 0,
            theory: 0
        }
    }
    res.send(userRequests[username]);
});

// our API for controlling the lights. we take the user requests here

app.put('/api/user/:username/speed/:speed', function (req, res) {
    var username = req.params.username;
    var speed = parseInt(req.params.speed);

    console.log("user " + username + " wants speed " + speed);
    if (speed == 1 || speed == 0 || speed == -1) {

        //add user if for some reason not yet present
        if (!userRequests[username]) {
            userRequests[username] = {
                speed: 0,
                theory: 0
            }
        }

        userRequests[username].speed = speed;
        res.send(userRequests[username]);

        var hue = hueControl.calcSpeedColor(userRequests);
        var sat = hueControl.calcSaturation(userRequests, "speed");
        hueControl.setSpeedColor(hue, sat);

        //for later evaluation purposes
        ratingLogger.logRating(userRequests, username, "speed", speed, {hue: hue, sat: sat});
    }else{
        res.send("Error, wrong values submitted");
    }

});

/*
 var degreeMultiplicator = 181.3333;
 var degrees = 360;

 function foo() {

 hueControl.setSpeedColor(Math.floor(degreeMultiplicator * degrees));
 degrees += 5;

 if (degrees > 360) {
 degrees -= 360;
 }
 }
 setInterval(foo, 301);
 */


app.put('/api/user/:username/theory/:theory', function (req, res) {
    var username = req.params.username;
    var theory = parseInt(req.params.theory);

    console.log("user " + username + " wants theory " + theory);

    if (theory == 1 || theory == 0 || theory == -1) {

        //add user if for some reason not yet present
        if (!userRequests[username]) {
            userRequests[username] = {
                speed: 0,
                theory: 0
            }
        }

        userRequests[username].theory = theory;
        res.send(userRequests[username]);

        var hue = hueControl.calcTheoryColor(userRequests);
        var sat = hueControl.calcSaturation(userRequests, "theory");
        hueControl.setTheoryColor(hue, sat);

        //for later evaluation purposes
        ratingLogger.logRating(userRequests, username, "theory", theory, {hue: hue, sat: sat});
    }else{
        res.send("Error, wrong values submitted");
    }



})


// start the server and listen to the port supplied
var server = app.listen(8080, function () {
    console.log('Listening on port %d', server.address().port);
});




