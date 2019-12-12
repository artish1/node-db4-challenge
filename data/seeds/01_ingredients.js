exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "cups of cornflour" },
        { id: 2, name: "cups of butter" },
        { id: 3, name: "eggs" },
        { id: 4, name: "grams of sugar" },
        { id: 5, name: "grams of salt" },
        { id: 6, name: "cups of milk" }
      ]);
    });
};
