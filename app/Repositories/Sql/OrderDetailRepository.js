'use strict'

const BaseRepository = use('App/Repositories/Sql/BaseRepository')

class OrderDetailRepository extends BaseRepository {
  get modelClass () {
    return 'App/Models/OrderDetail'
  }
}
module.exports = OrderDetailRepository