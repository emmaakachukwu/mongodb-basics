var MongoClient = require('mongodb').MongoClient;

const connect = function(callback) {
	var url = "mongodb://localhost:27017/emmaakachukwu";
	MongoClient.connect(url, callback);
}

module.exports = connect;

