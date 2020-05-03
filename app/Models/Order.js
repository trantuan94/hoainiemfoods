'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  static castDates (field, value) {
    return `${value.fromNow(true)} trước`
  }

  orderDetails () {
    return this.hasMany('App/Models/OrderDetail', 'id', 'order_id')
  }
}

module.exports = Order
