/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('vocab', (table) => {
    table.increments('id').primary()
    table.string('kupu')
    table.integer('week') // .references('mme_week.num')
    table.string('addedBy')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('vocab')
}
