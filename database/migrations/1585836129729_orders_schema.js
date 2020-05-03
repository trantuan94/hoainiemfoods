'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.string('customer_name')
      table.string('phone')
      table.string('delivery_address')
      table.string('payment_method')
      table.string('payment_status', 20)
      table.string('status', 20)
      table.integer('user_id').unsigned().nullable()
        .references('id').on('users')
    
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
