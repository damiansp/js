var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url)
  .then(function(db) {
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: 'NewEmployee'
    })
    .then(function(db1) {
        db1.collection('Employee').insertOne({
            Employeeid: 5,
            EmployeeName: 'NewerEmployee'
        })
    })
});
