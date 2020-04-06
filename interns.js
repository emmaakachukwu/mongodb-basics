var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/emmaakachukwu";
MongoClient.connect(url, function(err, db) { 
	if (err) throw err; 
	db.createCollection('interns',{
        capped: true,
        autoIndexId: true,
        size: 1000,
        max: 10000
    });
    console.log("Interns collection created");
    db.close();
});