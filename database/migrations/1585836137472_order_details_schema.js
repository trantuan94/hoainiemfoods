'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderDetailsSchema extends Schema {
  up () {
    this.create('order_details', (table) => {
      table.integer('product_id').unsigned()
        .references('id').on('products')

      table.integer('order_id').unsigned()
        .references('id').on('orders')

      table.float('price').unsigned();
      table.integer('quantity').unsigned().default(1);
      table.timestamps()
    })
  }

  down () {
    this.drop('order_details')
  }
}

module.exports = OrderDetailsSchema
