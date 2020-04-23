
exports.up = function(knex, Promise) {
    return knex.schema.createTable('skaters', tbl => {
        tbl.increments();
    
        tbl.string('name', 255).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('skaters');
};