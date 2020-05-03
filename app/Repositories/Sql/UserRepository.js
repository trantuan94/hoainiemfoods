'use strict'

const BaseRepository = use('App/Repositories/Sql/BaseRepository')

class UserRepository extends BaseRepository {
  get modelClass () {
    return 'App/Models/User'
  }
}
module.exports = UserRepository
