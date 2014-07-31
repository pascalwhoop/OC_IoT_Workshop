//dependencies
var express =       require('express');


/* ########     app creationand configuration      ########*/
var app = express();
//to be able to extract the javascript object from the body of a request
app.use(express.bodyParser());


/*app.get('/allo', function(req, res){
 res.send('Hello World');
 });*/

//host our workshop application as well as its static content
app.use('/', express.static(__dirname + '/'));
app.use('/static/app/bower_components/', express.static(__dirname + '/static/bower_components'));


//every user in the workshop calls this once he calls the website
app.post('/api/user/:username', function (req, res) {
    var username = req.params.username;


    //if user does not yet exist add him
    if(!userRequests[username]){
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
        if(!userRequests[username]){
            userRequests[username] = {
                speed: 0,
                theory: 0
            }
        }
        userRequests[username].speed = speed;
        res.send(userRequests[username]);
    }
    calcSpeedColor();

});


app.put('/api/user/:username/theory/:theory', function (req, res) {
    var username = req.params.username;
    var theory = parseInt(req.params.theory);

    console.log("user " + username + " wants theory " + theory);

    if (theory == 1 || theory == 0 || theory == -1) {

        //add user if for some reason not yet present
        if(!userRequests[username]){
            userRequests[username] = {
                speed: 0,
                theory: 0
            }
        }

        userRequests[username].theory = theory;
        res.send(userRequests[username]);
    }
    calcTheoryColor()
})


// start the server and listen to the port supplied
var server = app.listen(8080, function () {
    console.log('Listening on port %d', server.address().port);
});

var userRequests = {};


var calcTheoryColor = function () {
    var blue = 46920;
    var red = 65280;
    var span = red - blue;

    //we use the count to determine how many users we have in the workshop
    var count = 0;
    //the speedSum determines what color the lamp should display
    var speedSum = 0;
    for (var user in userRequests) {
        if (userRequests.hasOwnProperty(user)) {
            count++;
            speedSum += userRequests[user].theory;
        }
    }
    //if we have 10 participants the range of values for speedSum is [-10 ; 10] so 21 possible values and therefore 20 possible steps.
    var stepSize = Math.floor(span / (count * 2));

    // this value will be the amount of steps to take from the "bottom" which would be 12750 or yellow color code
    // if count is 10 and speedSum is -4 (meaning 4 more clicked slower than faster) the new value would be 6 meaning 6*stepSize + yellow = color to display
    var stepsToTake = speedSum + count;

    console.log("Lamp color code for Content will be: " + '' +(stepsToTake * stepSize + blue));
}


var calcSpeedColor = function () {
    var yellow = 12750;
    var green = 36210;
    var span = green - yellow;

    //we use the count to determine how many users we have in the workshop
    var count = 0;
    //the speedSum determines what color the lamp should display
    var speedSum = 0;
    for (var user in userRequests) {
        if (userRequests.hasOwnProperty(user)) {
            count++;
            speedSum += userRequests[user].speed;
        }
    }
    //if we have 10 participants the range of values for speedSum is [-10 ; 10] so 21 possible values and therefore 20 possible steps.
    var stepSize = Math.floor(span / (count * 2));

    // this value will be the amount of steps to take from the "bottom" which would be 12750 or yellow color code
    // if count is 10 and speedSum is -4 (meaning 4 more clicked slower than faster) the new value would be 6 meaning 6*stepSize + yellow = color to display
    var stepsToTake = speedSum + count;

    console.log("Lamp color code for speed will be: " + '' +(stepsToTake * stepSize + yellow));
}

