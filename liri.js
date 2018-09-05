var concertThis = require('./assets/concert-this.js');
var spotifyThis = require('./assets/spotify-this-song.js');

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
        Please a different command
        `);
        break;

}