const knex = require("knex");
const config = require("./knexfile");
const db = knex(config.development);

module.exports = {
  getRecipes
};

function getRecipes() {
  return db("recipes");
}
