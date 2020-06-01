'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Utils = use('App/Utils')
const _ = use('lodash')

class Product extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (productIns) => {
      if (productIns.name && productIns.code) {
        productIns.slug = productIns.code.toLowerCase() + '-' + _.kebabCase(Utils.unsignedString(productIns.name))
          + '-' + Utils.randomString(6, {lowerCaseOnly: true})
      }
    })
  }

  static castDates (field, value) {
    return `${value.fromNow(true)} trước`
  }

  category () {
    return this.belongsTo('App/Models/Category')
  }

  images () {
    return this.hasMany('App/Models/ProductImage')
  }
}

module.exports = Product
