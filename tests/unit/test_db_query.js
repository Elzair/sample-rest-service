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
  , test_birth_date: function(test) {
      var results = db.query({birth_date_begin: '2004-01-01', birth_date_end: '2006-01-01'});
      var data = test_data.slice(3, 4);
      test_objects(test, results, data);
      test.done();
    }
  , test_favorite_color: function(test) {
      var results = db.query({favorite_color: 'orange'});
      var data = test_data.slice(5, 6);
      test_objects(test, results, data);
      test.done();
    }
  , test_ignore_case: function(test) {
      var results = db.query({favorite_color: 'purple', ignore_case: true});
      var data = test_data.slice(2, 3);
      test_objects(test, results, data);
      test.done();
    }
};
