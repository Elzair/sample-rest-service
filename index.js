var http      = require('http')
  , koa       = require('koa')
  , logger    = require('koa-logger')
  , my_logger = require('./lib/logger')
  , route     = require('koa-route')
  , routes    = require('./routes')
  , util      = require('util')
  ;

// Set server's listening port
var port = (process.env.NODE_ENV === 'production') ? 80 : 3000;

// Create custom loggers
var access_log = my_logger.create_logger(__dirname + '/node.access.log');
var error_log = my_logger.create_logger(__dirname + '/node.error.log');

// Create koa app
var app = koa();

// middleware
app.use(logger());

// Error handler
app.use(function *(next) {
  try {
    access_log.log(util.format('%s %s', this.request.method, this.request.url));
    yield next;
    access_log.log(JSON.stringify(this.body));
  }
  catch (e) {
    error_log.log(e);
  }
});

// Route middleware
app.use(route.get('/', routes.index));
app.use(route.get('/search', routes.search));

// Create HTTP Server
http.createServer(app.callback()).listen(port);
console.log('Server listening on port ' + port);
