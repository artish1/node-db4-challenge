exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .unique()
        .notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      //Recipe ID
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //Ingredient ID
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      //Quantity Column
      tbl
        .float("quantity", 2)
        .unsigned()
        .notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.string("instruction_text", 1024).notNullable();

      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions");
};
