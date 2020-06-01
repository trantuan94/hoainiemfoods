'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateSchema extends Schema {
  up () {
    this.create('product_images', (table) => {
      table.increments();
      table.integer('product_id').unsigned().references('id').on('products')
      table.string('image')
      table.integer('is_main').default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('product_images')
  }
}

module.exports = CreateSchema
