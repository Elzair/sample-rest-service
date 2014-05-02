module.exports = function(test, results, data) {
  for (var i=0; i<data.length; i++) {
    test.equals(results[i].first_name, data[i].first_name);
    test.equals(results[i].last_name, data[i].last_name);
    test.equals(results[i].birth_date.getTime(), data[i].birth_date.getTime());
    test.equals(results[i].favorite_color, data[i].favorite_color);
    test.equals(results[i].address, data[i].address);
  }
};
