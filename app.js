const express = require('express');
const app = express();

// Addon: web
/*
app.use(express.static(__dirname + '/public'));
*/
const port = 'PORT' in process.env ? process.env.PORT : 8080

app.listen(port, function () {
  console.log(`Example app listening on port ${this.address().port}!`)
})
