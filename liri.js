var concertThis = require('./assets/concert-this');
var spotifyThis = require('./assets/spotify-this-song');
var movieThis = require('./assets/movie-this');
var doWhatItSays = require('./assets/do-what-it-says')

require('dotenv').config();



var userInput = process.argv;
var userInputSplice = userInput.splice(0, 3);
var liriCommand = userInputSplice[2];
let userSearch = userInput.join(' ');

switch (liriCommand) {

    case 'concert-this':
        concertThis.concert(userSearch);
        break;

    case 'spotify-this-song':
        spotifyThis.song(userSearch);
        break;

    case 'movie-this':
        movieThis.movie(userSearch);
        break;

    case 'do-what-it-says':
        doWhatItSays.doIt();
        break;

    default:
        console.log(`
        Please enter in a different command:
        -----------------------------------
        -concert-this "name of artist"
        -spotify-this-song "song title"
        -movie-this "movie title"
        -do-what-it-says
        -----------------------------------`);
        break;

}