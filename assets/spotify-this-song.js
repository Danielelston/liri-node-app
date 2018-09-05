require('dotenv').config();

var Spotify = require('node-spotify-api');
var keys = require('../keys.js');
var spotify = new Spotify(keys.spotify);

var spotifyThis = function (userSearch) {
    if (userSearch === '') {
        spotify
            .request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE')
            .then(function (data) {
                console.log(`
-------------------------        
Please input a song title
-------------------------

Artist(s)     : ${data.artists[0].name}
Song Title    : ${data.name}
Song Preview  : ${data.preview_url}
Album         : ${data.album.name}`);

            })
            .catch(function (err) {
                console.log(err);
            });

    } else {

        spotify.search({ type: 'track', query: userSearch }, function (err, data) {
            if (err) {
                return console.log(err);
            }

            var songData = data.tracks.items[0];

            var loggedResults = `
Artist(s)     : ${songData.artists[0].name}
Song Title    : ${songData.name}
Album         : ${songData.album.name}
Song Preview  : ${songData.preview_url}`;

            console.log(loggedResults);
        });
    }
}

module.exports = {
    song: spotifyThis
}