'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    let users = [
      {
        fullname: 'Administrator',
        username: 'admin',
        email: 'admin@gmail.com',
        password: '111111',
        phone: '0389350228',
      },
      {
        fullname: 'Trần Tuấn',
        username: 'trantuan94bk',
        email: 'trantuan94bk@gmail.com',
        password: '111111',
        phone: '0389350221',
      },
      {
        fullname: 'Nguyễn Văn Bình',
        username: 'binhnv',
        email: 'binhnv95@gmail.com',
        password: '111111',
        phone: '0389350222',
      },
      {
        fullname: 'Nguyễn Thu Phương',
        username: 'phuongnt',
        email: 'phuongnt96@gmail.com',
        password: '111111',
        phone: '0389350223',
      },
      {
        fullname: 'Hoàng Thế Bảo',
        username: 'baoht89',
        email: 'baoht89@gmail.com',
        password: '111111',
        phone: '0389350224',
      },
      {
        fullname: 'Lê Tiến Công',
        username: 'conglt96',
        email: 'conglt96@gmail.com',
        password: '111111',
        phone: '0389350225',
      },
      {
        fullname: 'Đinh Văn Huy',
        username: 'huydv98',
        email: 'huydv98@gmail.com',
        password: '111111',
        phone: '0389350226',
      }
    ]
    for (let user of users) {
      await User.create(user)
    }
  }
}

module.exports = UserSeeder
