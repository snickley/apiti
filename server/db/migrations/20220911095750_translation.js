/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('translation', (table) => {
    table.increments('id').primary()
    table.string('word')
    table.integer('kupu_id') // .references('vocab.id')
    table.string('addedBy')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('translation')
}
