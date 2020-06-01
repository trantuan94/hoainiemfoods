'use strict'

const BaseRepository = use('App/Repositories/Sql/BaseRepository')

class ProductRepository extends BaseRepository {
  get modelClass () {
    return 'App/Models/Product'
  }

  get searchable () {
    return ['code', 'name', 'slug', 'category_id', 'inventory_state', 'price']
  }

  async getNewProducts (options) {

  }

  async getHotSaleProducts (options) {

  }
}
module.exports = ProductRepository