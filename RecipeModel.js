const knex = require("knex");
const config = require("./knexfile");
const db = knex(config.development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients as re")
    .select("re.quantity", "i.name")
    .join({ i: "ingredients" }, "re.ingredient_id", "=", "i.id")
    .where("recipe_id", "=", recipe_id);
}

function getInstructions(recipe_id) {}
