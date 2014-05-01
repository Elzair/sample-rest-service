var fs = require('fs');

var logger = {
    log_file: null
  , log: function(msg) {
      console.log('Message:' + msg);
      this.log_file.write(msg + '\n');
    }
};

/**
 * Constructor-esque function for logger object
 */
exports.create_logger = function(log_file) {
  var new_logger = Object.create(logger);
  new_logger.log_file = fs.createWriteStream(log_file, {flags: 'a'});
  return new_logger;
};
