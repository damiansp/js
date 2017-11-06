var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://172.18.21.152/howgg';

MongoClient.connect(url, function(err, db) {
    var cursor = db.collection('surveys').find();
    cursor.each(function(err, doc) {
        console.log(doc);
    });

    /*
      db.collection('surveys').insertOne({
        key1: val1,
        key2: val2
      });
    */
});
