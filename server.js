var express = require('express');
var app = express();

/*app.get('/allo', function(req, res){
 res.send('Hello World');
 });*/

//to be able to extract the javascript object from the body of a request
app.use(express.bodyParser());

//host our workshop application as well as its static content
app.use('/', express.static(__dirname + '/'));
app.use('/static/app/bower_components/', express.static(__dirname + '/static/bower_components'));


//every user in the workshop calls this once he calls the website
app.post('/api/user/:username', function (req, res) {
    var username = req.params.username;
    console.log("user " + username + " joined the workshop");
    userRequests[username] = {
        speed: 0,
        theory: 0
    }
    res.send(userRequests[username]);
});

// our API for controlling the lights. we take the user requests here

app.put('/api/user/:username/speed/:speed', function (req, res) {
    var username = req.params.username;
    var speed = req.params.speed;

    console.log("user " + username + " wants speed " + speed);
    if (speed == 1 || speed == 0 || speed == -1) {
        userRequests[username].speed = speed;
        res.send(userRequests[username]);
    }
});


app.put('/api/user/:username/theory/:theory', function (req, res) {
    var username = req.params.username;
    var theory = req.params.theory;

    console.log("user " + username + " wants theory " + theory);

    if (theory == 1 || theory == 0 || theory == -1) {
        userRequests[username].theory = theory;
        res.send(userRequests[username]);
    }
})


// start the server and listen to the port supplied
var server = app.listen(8080, function () {
    console.log('Listening on port %d', server.address().port);
});

var userRequests = {};

//  Blue ==     46920
//  red ==      65280
//  yellow ==   12750
//  green ==    36210


