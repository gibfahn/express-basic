// *** OPTION: Monitoring ***
require('appmetrics-dash').start()

// *** OPTION: CLOUDANT ***
// Load the Cloudant library.
// const Cloudant = require('cloudant');
// const me = 'nodejs'; // Set this to your own account
// const password = process.env.cloudant_password;
// // Initialize the library with my account.
// let cloudant = Cloudant({
//   account: me,
//   password: password
// });
//
// cloudant.db.list(function(err, allDbs) {
//   console.log('All my databases: %s', allDbs.join(', '))
// });

// *** OPTION: MONGODB ***
// var MongoClient = require('mongodb').MongoClient,
//   format = require('util').format;
//
// if (!process.env['PORT']) {
//   port = '27017';
// }
//
// hostname = process.env['MONGO_HOSTNAME'];
// dbName = process.env['MONGO_DBNAME'];
//
// MongoClient.connect('mongodb://' + hostname + ':' + port + '/' + dbName,
// function (err, db) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Successfully connected to the database");
//     }
//     db.close();
// });

const express = require('express');
const app = express();

// *** APPTYPE: WEB ***
/*
app.use(express.static(__dirname + '/public'));
*/
const port = 'PORT' in process.env ? process.env.PORT : 8080

// TODO: VCAP_SERVICES
//const services = JSON.parse(process.env.VCAP_SERVICES || "{}");

app.listen(port, function() {
  console.log(`Example app listening on port ${this.address().port}!`)
})
