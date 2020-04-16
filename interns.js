const dbconn = require("./mongodb");

dbconn(function(err, db) {
    mydb = db.db();

    // CREATE A COLLECTION CALLED myMovies
    mydb.createCollection('myMovies', function(err, res){
		if (err) throw err;
        console.log('Collection created');
    });

    // INSERT DOCUMENT
    var movieObj = [
        {movie: "The Banker", year: "2020", rating: 8}, 
        {movie: "Bad Boys", year: "2020", rating: 7}, 
        {movie: "The Hunt", year: "2020", rating: 7}, 
        {movie: "Bloodshot", year: "2020", rating: 7.5}, 
        {movie: "First Cow", year: "2020", rating: 6.5}
    ];
    mydb.collection('myMovies').insertMany(movieObj, function(err, res) {
        if (err) throw err;
        console.log(res);
    });    
})