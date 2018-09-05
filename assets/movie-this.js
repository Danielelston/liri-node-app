var request = require('request');

var movieThis = function (userSearch) {

    if (userSearch === '') {
        userSearch = 'mr.nobody';
    };

    var searchArr = userSearch.split(' ');
    var search = searchArr.join('+');
    var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + search;

    request(url, function (err, res, data) {

        if (err) {

            return console.log(err);
        }

        var dataObj = JSON.parse(data);

        var loggedResults = `
Title           :   ${dataObj.Title}
Year            :   ${dataObj.Year}
IMDB            :   ${dataObj.imdbRating}
Rotten Tomatoes :   ${dataObj.Ratings[1].Value}
Country         :   ${dataObj.Country}
Language        :   ${dataObj.Language}
Plot            :   ${dataObj.Plot}
Actors          :   ${dataObj.Actors}`;

        console.log(loggedResults);

    });
}

module.exports = {
    movie: movieThis
}