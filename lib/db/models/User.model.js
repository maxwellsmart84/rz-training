'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objection = require('objection');

function User() {
  _objection.Model.apply(this, arguments);
}

_objection.Model.extend(User);

User.tableName = 'Users';

User.jsonSchema = {
  type: 'object',
  required: ['firstName', 'lastName'],

  properties: {
    id: { type: 'integer' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    address1: { type: 'string' }
  }
};

// Three types of relationships - 1:1, 1:more than1, many to many

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
User.relationMappings = {
  phones: {
    relation: _objection.Model.HasManyRelation,
    // 1:more than 1 since a user can have more than one phone but phone cant have more than
    modelClass: __dirname + '/Phone.model',
    join: {
      from: 'Users.id',
      to: 'Phones.userId'
    }
  }
};

exports.default = User;