var bunyan = require('bunyan');

var log = bunyan.createLogger({
    name: 'ratingLogger',
    streams: [
        {
            path: './log/' + new Date().getMonth() + "-" + new Date().getDate() + '_ratingLog.log',
            type: 'file'
        }
    ]
});

var logRating = function (userRequests, userWithNewRating, ratingType, newRatingValue, hueAndSat) {

    var count = 0;
    var sum = 0;

    for (var user in userRequests) {
        if (userRequests.hasOwnProperty(user)) {
            count++;
            sum += userRequests[user][ratingType];
        }
    }

    /*var a = "User: " + userWithNewRating + " - ratingType: " + ratingType + " - value: " + newRatingValue;
     var b = "New average for: " + ratingType + " - is: " + sum + " - with usercount: " + count;

     var stringToLog = a + "\n" + b;
     if (hueAndSat) {
     stringToLog = stringToLog + "\nhue: " + hueAndSat.hue + " - sat: " + hueAndSat.sat;
     }

     log.info(stringToLog);*/

    log.info({
        user: userWithNewRating,
        ratingType: ratingType,
        newRatingValue: newRatingValue,
        hue: hueAndSat.hue,
        sat: hueAndSat.sat,
        currentRatingAverage: sum,
        userCount: count
    });

};


module.exports = {
    logRating: logRating
};