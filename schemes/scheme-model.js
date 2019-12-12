const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

async function findById(id) {
  return await db("schemes")
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}

function findSteps(scheme_id) {
  return db("steps").where({ scheme_id: scheme_id });
}

function add(newScheme) {
  if (!newScheme.scheme_name) {
    return null;
  } else {
    return db("schemes")
      .insert(newScheme, "id")
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }
}

function update(changes, id) {
  console.log("in MODEL Update", id, changes);
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}

function remove(id) {
  const toDelete = findById(id)
  .then(removed => removed)
  return db("schemes")
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        return toDelete;
      }
    });
}
