var db     = require('../lib/db')
  , parse  = require('co-body')
  , util   = require('util')
  ;

// Route definitions

/**
 * Default route.
 */
exports.index = function *() {
    this.body = yield db.print();
};

/**
 * Query for items
 */
exports.search = function *() {
    this.body = db.query(this.request.query);
};
