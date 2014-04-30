var db     = require('../lib/db')
  , parse  = require('co-body')
  ;


// Route definitions

/**
 * Default route.
 */
exports.index = function *() {
  //this.body = yield fs.readFile(__dirname + '/../README.md');
  var result = '';
  this.body = db.query({name: 'John'});
};


