module.exports = {
    setUp: function(cb) {
      this.db = require(__dirname + '/../../lib/db');
      this.data = [
          {
              first_name: "John"
            , last_name: "Doe"
            , birth_date: new Date("1/1/2001 11:11:11")
            , favorite_color: " BLUE"
            , address: " 1234 Test Lane\r"
          }
        , {
              first_name: "Jane"
            , last_name: "Doe"
            , birth_date: new Date("2/02/2002 12:12:12 AM")
            , favorite_color: " green"
            , address: " 5678 Test Drive\r"
          }
        , {
              first_name: "Don"
            , last_name: "Duck"
            , birth_date: new Date("3/3/2003 13:13:13")
            , favorite_color: " PuRpLe"
            , address: " 9012 Test Road\r"
          }
        , {
              first_name: "Hal"
            , last_name: "Jordan"
            , birth_date: new Date("4/4/2004 14:14:14")
            , favorite_color: " gray"
            , address: " 3456Test Blvd\r"
          }
        , {
              first_name: "James"
            , last_name: "May"
            , birth_date: new Date('5/5/2005 15:1515')
            , favorite_color: " black"
            , address: " 7890 Test Street\r"
          }
        , {
              first_name: "Greg"
            , last_name: "House"
            , birth_date: new Date("6/6/2006 16:16:16")
            , favorite_color: " orange"
            , address: ''}
      ];
      cb();
    }
  , tearDown: function(cb) {
      cb();
    }
  , test_print: function(test) {
      var results = this.db.print();
      for (var i=0; i<6; i++) {
        test.equals(results[i].first_name, this.data[i].first_name);
        test.equals(results[i].last_name, this.data[i].last_name);
        test.equals(results[i].birth_date.getTime(), this.data[i].birth_date.getTime());
        test.equals(results[i].favorite_color, this.data[i].favorite_color);
        test.equals(results[i].address, this.data[i].address);
      }
      //test.equals('Hello World', 'Hello World');
      test.done();
    }
};
