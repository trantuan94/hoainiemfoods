'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Utils = use('App/Utils')
const _ = use('lodash')

class Category extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (categoryIns) => {
      if ( categoryIns && categoryIns.name) {
        categoryIns.slug = _.kebabCase(Utils.unsignedString(categoryIns.name)) + '-' + Utils.randomString(6, {lowerCaseOnly: true})
      } else {
        console.log('not found categoryIns')
      }
    })
  }

  static castDates (field, value) {
    return `${value.fromNow(true)} trước`
  }

  products () {
    return this.hasMany('App/Models/Product', 'id', 'category_id')
  }
}

module.exports = Category
