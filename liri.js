var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var movieParam = process.argv;
var movieName = "";


var twitterKeys = require('./keys.js');
//console.log(tweets);
var params = {screen_name: 'mciarra16'};
console.log(params);
var myArgs = process.argv[2];
console.log('myArgs: ', myArgs);
if (myArgs == "my-tweets"){
twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response){
        if (error) {
            console.log(error);
        } else{
            console.log(tweets.created_at);
            console.log(tweets.text)
        }
    })
}
// var spotify = new Spotify({
//     id: '59a04cd1a6ea48f38896fec5af3160bc',
//     secret: '2f08c0e6e38f4f8dbfe411bd4a13ce9d'
//   });
  
//   spotify.search({ type: 'track', query: 'Hello', limit: 1 }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     } else if (process.argv[2] == "spotify-this-song"){
  
//     console.log(data.tracks.items[0].album.name); 
//     console.log(data.tracks.items[0].artists[0].name)
//     console.log(data.tracks.items[0].name)
//     console.log(data.tracks.items[0].external_urls)
//     }
//   });

if(myArgs == "movie-this"){

for (var index = 3; index < movieParam.length; index++){
    if(index > 3 && index < movieParam.length){
        movieName = movieName + "+" + movieParam[index];
        console.log(movieName);
    } else{
        movieName += movieParam[index];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
console.log(queryUrl);
request(queryUrl, function(error, response, body){
    if(error){
        throw error
    } else if(response.statusCode == 200){
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year Released: " +JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " +JSON.parse(body).Ratings[1].Value);
        console.log("Produced In: " +JSON.parse(body).Country);
        console.log("Language of Movie: " +JSON.parse(body).Language);
        console.log("Plot: " +JSON.parse(body).Plot);
        console.log("Actors: " +JSON.parse(body).Actors);
    } //else if(!movieName){

    //}

})
}