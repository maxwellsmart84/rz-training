'use strict';

import {Model} from 'objection';

function User() {
  Model.apply(this, arguments);
}

Model.extend(User);

User.tableName = 'Users';

User.jsonSchema = {
  type: 'object',
  required: ['firstName', 'lastName'],

  properties: {
    id:        {type:'integer'},
    firstName: {type: 'string'},
    lastName:  {type: 'string'},
    address1:  {type: 'string'},
  }
};

// Three types of relationships - 1:1, 1:more than1, many to many

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
User.relationMappings = {
    phones: {
      relation: Model.HasManyRelation,
      // 1:more than 1 since a user can have more than one phone but phone cant have more than
      modelClass: __dirname + '/Phone.model',
      join: {
        from: 'Users.id',
        to: 'Phones.userId',
      },
    },
};

export default User;
