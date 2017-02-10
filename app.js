/*** OPTION: Monitoring - START ***/
require('appmetrics-dash').start()
/*** OPTION: Monitoring - END ***/

const express = require('express');
const app = express();

/*** APPTYPE: WEB - START ***/
app.use(express.static(__dirname + '/public'));
/*** APPTYPE: WEB - END ***/

/*** OPTION: CLOUDANT - START ***/
// Load the Cloudant library.
const Cloudant = require('cloudant');
const me = 'nodejs'; // Set this to your own account
const password = process.env.cloudant_password;
// Initialize the library with my account.
let cloudant = Cloudant({
  account: me,
  password: password
});

cloudant.db.list(function(err, allDbs) {
  if (allDbs) {
    console.log('All my databases: %s', allDbs.join(', '))
  } else {
    console.log('No cloudant databases found');
  }
});
/*** OPTION: CLOUDANT - END ***/

/*** OPTION: MONGODB - START ***/
// TODO(gib): Fix the manifest.yml so it provisions the service properly, then 
// uncomment this section (which seems to work locally).
/* 
var MongoClient = require('mongodb').MongoClient,
  format = require('util').format;

let mongoPort;
if (process.env['PORT']) {
 mongoPort = process.env['PORT'];
} else {
 mongoPort = '27017';
}

hostname = process.env['MONGO_HOSTNAME'] ? process.env['MONGO_HOSTNAME'] : 'localhost';
dbName = process.env['MONGO_DBNAME'];

MongoClient.connect('mongodb://' + hostname + ':' + mongoPort + '/' + dbName,
function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("Successfully connected to the mongodb database");
    }
    db.close();
});
*/
/*** OPTION: MONGODB - END ***/

/*** OPTION: REDIS - START ***/
const redis = require('redis');
let redisPort;

if (process.env['PORT']) {
  redisPort = process.env['PORT'];
} else {
  redisPort = '6379';
}
if (process.env['HOSTNAME']) {
  host = process.env['HOSTNAME'];
} else {
  host = '127.0.0.1';
}

var client = redis.createClient(redisPort, host);
// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on('error', function (err) {
    console.log('Error ' + err);
});
client.on('connect', function() {
    console.log('Successfully connected to the database');
});
client.quit();
/*** OPTION: REDIS - END ***/

const port = 'PORT' in process.env ? process.env.PORT : 8080

// TODO: VCAP_SERVICES
//const services = JSON.parse(process.env.VCAP_SERVICES || "{}");

app.listen(port, function() {
  console.log(`Example app listening on ${this.address().address}:${this.address().port}`)
})
