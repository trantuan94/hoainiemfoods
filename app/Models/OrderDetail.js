'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderDetail extends Model {
  product () {
    return this.belongsTo('App/Models/Product', 'product_id', 'id')
  }

  order () {
    return this.belongsTo('App/Models/Order', 'order_id', 'id')
  }
}

module.exports = OrderDetail
