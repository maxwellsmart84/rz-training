'use strict';

import dbConfig from './db/config/default';
import * as rz from 'rhinozug';
import { Model } from 'objection';

import * as userService from './db/services/User.service';
//get connection object from rhinozug
let connection = rz.getConnection(dbConfig);
//load connection into objection
Model.knex(connection);

let newUser = {
  firstName: 'Max',
  lastName: 'Krause',
  address1: '382 Sumter St.',
  phones: [
    {
      number: '773-320-5069',
    },
    {
      number: '123-456-7890',
    }
  ]
}

userTest();

async function userTest() {
  try {
  await userService.insertUser(newUser);

  let users = await userService.getUsers();

  console.log(JSON.stringify(users, null, 2));
  } catch (err) {
  console.log(err);
  }

  connection.destroy();
}
