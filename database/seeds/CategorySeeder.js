'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Category')

class CategorySeeder {
  async run () {
    let categories = [
      {
        name: 'Mì-Phở',
        type: 'product',
        status: 'actived'
      },
      {
        name: 'Mắm-Tương',
        type: 'product',
        status: 'actived'
      },
      {
        name: 'Thạch',
        type: 'product',
        status: 'actived'
      },
    ];
    for (let cat of categories) {
      await Category.create(cat);
    }
  }
}

module.exports = CategorySeeder
