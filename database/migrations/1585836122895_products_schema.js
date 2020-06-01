'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('code', 20).unique()
      table.string('name', 100).index('products_name_index')
      table.string('slug', 200).index()
      table.integer('category_id').unsigned()
        .references('id').on('categories').onDelete('cascade')
        .index('products_category_id_index')
      table.float('price').unsigned()
      table.integer('topsell').default(0);
      table.text('description').nullable();
      table.string('inventory_state', 20).default('instock').comment('tình trạng tồn kho')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
