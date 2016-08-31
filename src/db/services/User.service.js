'use strict';

import User from '../models/User.model';

export async function getUsers() {
  try {
    let users = await User.query().eager('phones');
    if (!users || users.length === 0) {
      return new Promise.reject (new Error('no users found'));
    }
    return Promise.resolve(users);
  } catch (err) {
    return new Promise.reject(new Error(err));
  }
}

export function insertUser(user) {
  return User.query().insertWithRelated(user);
}
