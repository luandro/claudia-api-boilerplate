'use strict';

var _claudiaApiBuilder = require('claudia-api-builder');

var _claudiaApiBuilder2 = _interopRequireDefault(_claudiaApiBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = new _claudiaApiBuilder2.default();
module.exports = api;

api.get('/', function (req) {
  return 'claudia-api-boilerplate: use the /name route to make requests';
});

api.get('/name', function (req) {
  if (req.queryString.name) {
    return 'Hi there ' + req.queryString.name + '!';
  } else {
    return 'Use /name?name=YourName to pass query';
  }
});
