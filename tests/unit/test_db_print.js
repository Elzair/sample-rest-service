var db           = require(__dirname + '/../../lib/db')
  , test_data    = require(__dirname + '/helpers/test_data').data
  , test_objects = require(__dirname + '/helpers/test_objects')
  ;

module.exports = {
    setUp: function(cb) {
      cb();
    }
  , tearDown: function(cb) {
      cb();
    }
  , test_print: function(test) {
      var results = db.print();
      test_objects(test, results, test_data);
      test.done();
    }
};
