const dbconn = require("./mongodb");

dbconn(function(err, db) {
    mydb = db.db();

    // RETURN THE FIRST DOCUMENT IN THE COLLECTION
    mydb.collection('myMovies').findOne({}, function(err, res) {
        if (err) throw err;
        console.log("The first document in the collection has been found");
        console.log(res);
    });

    // RETURN ALL MOVIES WITH A RATING OF 7
    mydb.collection('myMovies').find({rating: 7}).toArray(function(err, res) {
        if (err) throw err;
        console.log("All documents in the collection with a rating of 7 has been found");
        console.log(res);
    });

    // USING PROJECTION OBJECT, RETURN ALL MOVIES SHOWING ONLY THE TITLES
    mydb.collection('myMovies').find({}, {projection: {_id: 0, movie: 1}}).toArray(function(err, res) {
        if (err) throw err;
        console.log("All documents in the collection has been found and only the titles displayed");
        console.log(res);
    });
})