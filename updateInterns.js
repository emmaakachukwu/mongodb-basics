const dbconn = require("./mongodb");

dbconn(function(err, db) {
    mydb = db.db();

    //UPDATE THE MOVIE WITH TITLE "The Banker"
    mydb.collection('myMovies').replaceOne({movie: "The Banker"}, {movie: "Ace", year: "2018", rating: "9"}, function(err, res) {
    	if (err) throw err;
        console.log("One document updated");
        // LOG THE UPDATED COLLECTION TO THE CONSOLE
        mydb.collection('myMovies').find({}).toArray(function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    });
});