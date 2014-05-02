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
  , test_query_first_name: function(test) {
      var results = db.query({first_name: 'John'});
      var data = [test_data[0]];
      test_objects(test, results, data);
      test.done();
    }
  , test_query_last_name: function(test) {
      var results = db.query({last_name: 'Doe'});
      var data = test_data.slice(0, 2);
      test_objects(test, results, data);
      test.done();
    }
};
