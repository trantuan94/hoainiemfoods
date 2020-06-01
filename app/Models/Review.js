'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductImage extends Model {
  static boot () {
    super.boot()
  }

  product () {
    return this.belongsTo('App/Models/Product')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = ProductImage