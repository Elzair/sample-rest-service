var fs = require('fs');

var db = {
    data: []
  , init: function() {
      // Create datastore
      var input = fs.readFileSync(__dirname + '/../data/RSC_Test.csv', 'utf8').split('\n');
      this.data = [];
      for (var i=0; i<input.length; i++) {
        var datum = input[i].split(',');
        // Split names into first & last name (if latter is available)
        var names = datum[0].split(' ');
        this.data.push({
            first_name:     names[0] 
          , last_name:      names[1] || null 
          , birth_date:     new Date(datum[1])
          , favorite_color: datum[2]
          , address:        datum[3]
        });
      }
    }
  , query_val: function(key, value, ignore_case, arr) {
      // Initialize datastore if it has not yet been
      if (this.data.length === 0) {
        this.init();
      } 
      ignore_case = ignore_case || false;
      var new_arr = arr ? arr : this.data;
      var result = [];
      for (var i=0; i<new_arr.length; i++) {
        // Handle birth date range specially
        if (key === 'birth_date_begin' && new_arr[i].birth_date &&
            new_arr[i].birth_date >= new Date(value)) {
          result.push(new_arr[i]);
        }
        else if (key === 'birth_date_end' && new_arr[i].birth_date && 
            new_arr[i].birth_date <= new Date(value)) {
          result.push(new_arr[i]);
        }
        else if (new_arr[i][key]){
          value = ignore_case ? value.toUpperCase() : value;
          var cmp_value = ignore_case ? new_arr[i][key].toUpperCase() : new_arr[i][key];
          if (cmp_value.indexOf(value) !== -1) {
            result.push(new_arr[i]);
          }
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
      var result = null;
      // Set query to ignore case if user specified that value
      var ignore_case = params.hasOwnProperty('ignore_case') ? params.ignore_case : false;
      for (p in params) {
        if (p !== 'ignore_case') {
          result = this.query_val(p, params[p], ignore_case, result);
        }
      }
      return result;
    }
  , print: function() {
      // Initialize datastore if it has not yet been
      if (this.data.length === 0) {
        this.init();
      } 
      return this.data;
    }
};

module.exports = db;
