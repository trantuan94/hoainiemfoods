'use strict'

const BaseRepository = use('App/Repositories/Sql/BaseRepository')

class CategoryRepository extends BaseRepository {
  get modelClass () {
    return 'App/Models/Category'
  }
}
module.exports = CategoryRepository
