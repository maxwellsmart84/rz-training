'use strict';

import {Model} from 'objection';

function Phone() {
  Model.apply(this, arguments);
}

Model.extend(Phone);

Phone.tableName = 'Phones';

Phone.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    id: {type:'integer'},
    userId: {type: 'integer'},
    number: {type: 'string'},
  }
};

/* see http://vincit.github.io/objection.js/#models for example mappings.  to/from should
   use the /table/ name, not the model name */
Phone.relationMappings = {

};

export default Phone;
