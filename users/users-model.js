/* eslint-disable no-param-reassign */
const bcrypt = require('bcryptjs');
const db = require('../data/config');

function get(id) {
  const query = db('users');

  if (id) {
    return query
      .where({ id })
      .first('id', 'username', 'email', 'user_type', 'org_id');
  }
  return query.select('id', 'username', 'email', 'user_type', 'org_id');
}

function getBy(filter) {
  return db('users')
    .where(filter)
    .select('id', 'username', 'password', 'user_type', 'org_id');
}

async function add(user) {
  // user.password = await bcrypt.hash(user.password, 14);
  return db('users')
    .insert(user)
    .returning('*');
}

function update(id, user) {
  return db('users')
    .where({ id })
    .update(user)
    .returning('*');
}

function del(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = {
  get,
  getBy,
  add,
  update,
  del,
};
