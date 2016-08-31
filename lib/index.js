'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var userTest = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var users;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return userService.insertUser(newUser);

          case 3:
            _context.next = 5;
            return userService.getUsers();

          case 5:
            users = _context.sent;


            console.log((0, _stringify2.default)(users, null, 2));
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 12:

            connection.destroy();

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function userTest() {
    return _ref.apply(this, arguments);
  };
}();

var _default = require('./db/config/default');

var _default2 = _interopRequireDefault(_default);

var _rhinozug = require('rhinozug');

var rz = _interopRequireWildcard(_rhinozug);

var _objection = require('objection');

var _User = require('./db/services/User.service');

var userService = _interopRequireWildcard(_User);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//get connection object from rhinozug
var connection = rz.getConnection(_default2.default);
//load connection into objection
_objection.Model.knex(connection);

var newUser = {
  firstName: 'Max',
  lastName: 'Krause',
  address1: '382 Sumter St.',
  phones: [{
    number: '773-320-5069'
  }, {
    number: '123-456-7890'
  }]
};

userTest();