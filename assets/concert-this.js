var request = require('request');
var moment = require('Moment');

console.log("command to concert-this")

var concertThis = function (userSearch) {

    request("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp", function (err, response, body) {
        if (err) {
            return console.log("Error: " + err);
        }

        var data = JSON.parse(body);

        console.log("userSearch: " + userSearch);
        console.log("concert data: " + data);

        if (data.length === 0) {
            console.log('No tour dates found!');
        } else {
            console.log(`
Concerts for ${userSearch}
--------------------------------------------------`)
            data.forEach( function(key) {
                const loggedResults = `
Venue    : ${key.venue.name}
Location : ${key.venue.city} ${key.venue.region}
Date     : ${moment(key.datetime).format('MM-DD-YYYY')}`;
                console.log(loggedResults);
            });
        }
    });
}

module.exports = {
    concert: concertThis
}