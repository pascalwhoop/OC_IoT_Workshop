var Client = require('node-rest-client').Client;
/*  https://www.npmjs.org/package/node-rest-client  */
client = new Client();


var hueConf = {
    username: "pascaldeveloper",
    apiURL: "http://169.254.16.11/api",
    workshopLampIDs: {
        speed: "2",
        theory: "3"
    },
    /*keep this as it is the official HUE API*/
    lights: "/lights"

};

var setTheoryColor = function (hue, sat) {
    var url = hueConf.apiURL + "/" + hueConf.username + hueConf.lights + "/" + hueConf.workshopLampIDs.theory + "/state";

    var args = {
        data: JSON.stringify({
            "on": true,
            "hue": hue,
            "sat": sat
        })
    };

    client.put(url, args, function (data) {

        // parsed response body as js object
    });
};

var getLamps = function (callback) {
    // registering remote methods
    // direct way
    var url = hueConf.apiURL + "/" + hueConf.username + hueConf.lights;

    client.get(url, function (data) {
        // parsed response body as js object
        callback(data);
    });
};

var setSpeedColor = function (hue, sat) {
    var url = hueConf.apiURL + "/" + hueConf.username + hueConf.lights + "/" + hueConf.workshopLampIDs.speed + "/state";


    var args = {
        data: JSON.stringify({
            "on": true,
            "hue": hue,
            "sat": sat
        })
    };

    client.put(url, args, function (data) {

        // parsed response body as js object
    });
};

var calcTheoryColor = function (userRequests) {
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
    var hue = stepsToTake * stepSize + blue;

    console.log("Lamp color code for Theory will be: " + '' + hue);
    return hue;
};

var calcSpeedColor = function (userRequests) {
    var yellow = 0;
    var green = 25500;
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
    var hue = stepsToTake * stepSize + yellow;

    console.log("Lamp color code for speed will be: " + '' + hue);
    return hue;
};

var calcSaturation = function (userRequests, type) {
    var sum = 0;
    var FULL_SAT = 255;
    var NO_SAT = 0;
    var userCount = 0;


    for (var user in userRequests) {
        if (userRequests.hasOwnProperty(user)) {
            userCount++;
            sum += userRequests[user][type];
        }
    }

    //if we have 10 participants the range of values for sum is [-10 ; 10] so 21 possible values and therefore 20 possible steps. our range is twice FULL_SAT
    var stepSize = Math.floor((FULL_SAT * 2) / (userCount * 2));
    var stepsToTake = sum + userCount;

    //now we get a range from -255 to 0 to 255 (because we substract 255 at the end so no steps is -255 and stepsize is so large that with 10 users and 10 steps we end up with 2*255)
    var saturation = (NO_SAT + stepsToTake * stepSize) - FULL_SAT;
    return Math.abs(saturation);
};

module.exports = {
    getLamps: getLamps,
    setTheoryColor: setTheoryColor,
    setSpeedColor: setSpeedColor,
    calcTheoryColor: calcTheoryColor,
    calcSpeedColor: calcSpeedColor,
    calcSaturation: calcSaturation
};