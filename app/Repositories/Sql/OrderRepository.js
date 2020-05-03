'use strict'

const BaseRepository = use('App/Repositories/Sql/BaseRepository')

class OrderRepository extends BaseRepository {
  get modelClass () {
    return 'App/Models/Order'
  }
}
module.exports = OrderRepository