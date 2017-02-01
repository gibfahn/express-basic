// CONCERN: monitoring - begin
// TODO(gib): Should we be using strong-supervisor instead?
const appmetrics = require('appmetrics');
const monitoring = appmetrics.monitor();
// CONCERN: monitoring - end

const express = require('express');
const app = express();

// APPLICATION: web - begin
app.use(express.static(__dirname + '/public'));
// APPLICATION: web - begin

const port = 'PORT' in process.env ? process.env.PORT : 8080

app.listen(port, function () {
  console.log(`Example app listening on port ${this.address().port}!`)
})
