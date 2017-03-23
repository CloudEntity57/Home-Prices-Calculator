var path = require('path')
var funcs = require('./funcs')




// 1. load the database
var dbFile = path.join(__dirname, 'input.txt');

funcs.loadDb(dbFile, function (data) {

  funcs.challenge_1(data);
  process.exit(0);
})
