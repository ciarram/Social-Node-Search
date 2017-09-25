var request = require("request");
var movieParam = process.argv;
var movieName = "";

for (var index = 2; index < movieParam.length; index++){
    if(index > 2 && index < movieParam.length){
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
    } //else if(movieName == ""){

    //}

})