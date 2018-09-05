var fs = require('fs');
var concertThis = require('./concert-this');
var spotifyThis = require('./spotify-this-song');
var movieThis = require('./movie-this');

var doWhatItSays = function () {

    fs.readFile('random.txt', 'utf-8', function (err, data) {

        if (err) {
            return console.log(err);
        }

        var dataArr = data.split(',');
        var command = dataArr[0];
        var userSearch = dataArr[1].trim();

        switch (command) {

            case 'concert-this':
                concertThis.concert(userSearch);
                break;

            case 'spotify-this-song':
                spotifyThis.song(userSearch);
                break;

            case 'movie-this':
                movieThis.movie(userSearch);
                break;

            default:
                console.log('There seems to have been a problem...');
                break;
        }

    });
};

module.exports = {
    doIt: doWhatItSays
};