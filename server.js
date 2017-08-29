const express = require('express');
const routes = require('./routes');

var app = express();

app.use('/', routes)

app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
  console.log('server is started on port 3000')
})
