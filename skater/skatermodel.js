const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(skaters) {
  const [id] = await db("skaters").insert(skaters);
  return db("skaters")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
return db("skaters").where('id', id).del()
}

function getAll() {
  return db("skaters");
}

function findById(id) {
  return db("skaters").where({ id }).first();
}