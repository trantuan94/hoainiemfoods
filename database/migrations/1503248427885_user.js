'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('fullname', 40).nullable()
      table.string('username', 20).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 250).notNullable()
      table.string('avatar').nullable()
      table.string('phone').nullable()
      table.string('address').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
