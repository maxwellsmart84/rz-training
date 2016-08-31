'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getUsers = exports.getUsers = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var users;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User2.default.query().eager('phones');

          case 3:
            users = _context.sent;

            if (!(!users || users.length === 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', new _promise2.default.reject(new Error('no users found')));

          case 6:
            return _context.abrupt('return', _promise2.default.resolve(users));

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', new _promise2.default.reject(new Error(_context.t0)));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function getUsers() {
    return _ref.apply(this, arguments);
  };
}();

exports.insertUser = insertUser;

var _User = require('../models/User.model');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insertUser(user) {
  return _User2.default.query().insertWithRelated(user);
}