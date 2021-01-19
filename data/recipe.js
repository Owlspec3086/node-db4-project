exports.seed = function (knex) {
  return knex('recipes')
    .turncate()
    .then(() => {
      return knex('recipes').insert([
        { name: 'fish fried' },
        { name: 'pancakes' },
        { name: 'avocado smoothie' },
      ]);
    });
};
