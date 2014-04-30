var fs = require('fs');

var db = {
    data: []
  , init: function() {
      // Create datastore
      var input = fs.readFileSync(__dirname + '/data/RSC_Test.csv', 'utf8').split('\n');
      this.data = [];
      for (var i=0; i<input.length; i++) {
        var datum = input.split(',');
        this.data.push({
            name:     datum[0] 
          , datetime: datum[1]
          , color:    datum[2]
          , address:  datum[3]
        });
      }
    }
  , query_val: function(key, value, arr) {
      var new_arr = arr ? arr : this.data;
      var result = [];
      for (var i=0; i<new_arr.length; i++) {
        if (new_arr[key] && new_arr[key].indexOf(value) !== -1) {
          result.push(new_arr[key]);
        } 
      }
      return result;
    }
  , query: function(params) {
      // Initialize datastore if it has not yet been
      if (this.data.length === 0) {
        this.init();
      } 
      var p = null;
      var result = [];
      for (p in params) {
        result = this.query_val(p, params[p], result);
      }
      return result;
    }
};




module.exports = db;
