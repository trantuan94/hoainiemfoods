'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewsSchema extends Schema {
  up () {
    this.create('reviews', (table) => {
      table.increments()
      table.text('content')
      table.integer('rank')
      table.integer('product_id').unsigned().references('id').on('products')
      table.integer('user_id').unsigned().references('id').on('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('reviews')
  }
}

module.exports = ReviewsSchema
