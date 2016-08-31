'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objection = require('objection');

function Phone() {
  _objection.Model.apply(this, arguments);
}

_objection.Model.extend(Phone);

Phone.tableName = 'Phones';

Phone.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    id: { type: 'integer' },
    userId: { type: 'integer' },
    number: { type: 'string' }
  }
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Phone.relationMappings = {};

exports.default = Phone;