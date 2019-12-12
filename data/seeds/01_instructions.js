exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          instruction_text: "Mix flour and eggs",
          step_number: 1
        },
        { recipe_id: 1, instruction_text: "bake", step_number: 2 },
        { recipe_id: 1, instruction_text: "???", step_number: 3 },
        { recipe_id: 1, instruction_text: "eat", step_number: 4 }
      ]);
    });
};
